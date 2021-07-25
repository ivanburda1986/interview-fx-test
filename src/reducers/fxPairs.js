import { LOAD_FXPAIRS, FILTER_FXPAIRS } from "../actions/fxPairs";

//Helping function - place them to an external file later on
const validateFXPairs = function (fxPairs) {
  return fxPairs.filter((pair) => pair.currency.replace(/\s+/g, "").length === 3 && pair.nameI18N !== undefined && pair.exchangeRate !== undefined);
};

const filterFXPairs = function ({ fxPairs, filterString }) {
  let filterBy = filterString.slice(1).toUpperCase();
  console.log("FilterBy:", filterBy);

  let codeFiltered = Object.values(fxPairs).filter((pair) => {
    let relevant = pair.currency.slice(0, filterBy.length);
    return relevant === filterBy;
  });
  return codeFiltered;
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
      let filteredFXPairs = filterFXPairs({ fxPairs: { ...state.backup }, filterString: action.hash });
      return {
        ...state,
        data: { ...filteredFXPairs },
      };

    default:
      return { ...state };
  }
}
