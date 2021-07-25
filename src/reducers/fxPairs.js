import { LOAD_FXPAIRS, FILTER_FXPAIRS } from "../actions/fxPairs";

//Helping function - place them to an external file later on
const validateFXPairs = function (fxPairs) {
  return fxPairs.filter((pair) => pair.currency.replace(/\s+/g, "").length === 3 && pair.nameI18N !== undefined && pair.exchangeRate !== undefined);
};

const filterFXByCodeAndName = function ({ fxPairs, filterString }) {
  let regexSpace = /%20/gi;
  let regexHash = /#/gi;
  let filterBy = filterString.replaceAll(regexSpace, "").replaceAll(regexHash, "").toUpperCase();
  //console.log("-----------------------------------------------------------");
  //console.log("FilterBy:", filterBy);

  let results = Object.values(fxPairs).filter((pair) => {
    let relevantCurrencyCodePart = pair.currency.toUpperCase().replaceAll(regexSpace, "").slice(0, filterBy.length);
    let relevantCurrencyNamePart = pair.nameI18N.toUpperCase().split(" ");
    //console.log(relevantCurrencyCodePart);
    console.log(relevantCurrencyNamePart);
    //console.log("Name part", pair.nameI18N.slice(0, filterBy.length).toUpperCase().replace(/\s+/g, ""));
    return relevantCurrencyCodePart === filterBy || relevantCurrencyNamePart.some((word) => word.slice(0, filterBy.length) === filterBy);
  });
  return results;
};

export default function fxPairs(state = { data: {} }, action) {
  switch (action.type) {
    case LOAD_FXPAIRS:
      let validatedFXPairs = validateFXPairs(action.fxPairs.fx);
      return {
        ...state,
        data: { ...validatedFXPairs },
        backup: { ...validatedFXPairs },
      };
    case FILTER_FXPAIRS:
      let filteredFXPairs = filterFXByCodeAndName({ fxPairs: { ...state.backup }, filterString: action.hash });
      return {
        ...state,
        data: { ...filteredFXPairs },
      };

    default:
      return { ...state };
  }
}
