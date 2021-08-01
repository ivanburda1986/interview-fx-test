import { LOAD_FXPAIRS, FILTER_FXPAIRS } from "../actions/fxPairs";

//Helping functions

const validateFXPairs = (fxPairs) => {
  return fxPairs.filter((pair) => pair.currency.replace(/\s+/g, "").length === 3 && pair.nameI18N !== undefined && pair.exchangeRate !== undefined && pair.exchangeRate.middle);
};

const filterFXByCodeAndName = function ({ fxPairs, filterString }) {
  let regexHash = /#/gi;
  let regexURLSpace = /%20/gi;
  let filterBy = filterString.replaceAll(regexURLSpace, "").replaceAll(regexHash, "").toLowerCase();

  let results = Object.values(fxPairs).filter((pair) => {
    let relevantCurrencyCodePart = pair.currency.toLowerCase().slice(0, filterBy.length);
    let currencyNameIndividualWords = pair.nameI18N.toLowerCase().split(" ");
    let currencyNameConjoinedPart = pair.nameI18N.replaceAll(" ", "").toLowerCase().slice(0, filterBy.length);
    return relevantCurrencyCodePart === filterBy || currencyNameIndividualWords.some((word) => word.slice(0, filterBy.length) === filterBy) || currencyNameConjoinedPart === filterBy;
  });
  return results;
};

//Reducer
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
      let filteredFXPairs = filterFXByCodeAndName({ fxPairs: { ...state.backup }, filterString: action.searchHash });
      return {
        ...state,
        data: { ...filteredFXPairs },
      };

    default:
      return { ...state };
  }
}

export { validateFXPairs, filterFXByCodeAndName };
