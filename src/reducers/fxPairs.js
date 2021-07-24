import { LOAD_FXPAIRS, FILTER_FXPAIRS } from "../actions/fxPairs";

export default function fxPairs(state = {}, action) {
  switch (action.type) {
    case LOAD_FXPAIRS:
      let validatedFXPairs = action.fxPairs.fx.filter((pair) => pair.currency.replace(/\s+/g, "").length === 3 && pair.nameI18N !== undefined && pair.exchangeRate !== undefined);
      //console.log('Pair: ', validatedFXPairs);
      return {
        ...state,
        ...validatedFXPairs,
      };
    case FILTER_FXPAIRS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
