import { LOAD_FXPAIRS } from "../actions/fxPairs";

const validateFXPairs = (fxPairs) => {
  return fxPairs.filter(
    (pair) =>
      pair.currency.replace(/\s+/g, "").length === 3 &&
      pair.nameI18N !== undefined &&
      pair.exchangeRate !== undefined &&
      pair.exchangeRate.middle
  );
};

export default function fxPairs(
  state = { data: [], fxPairsLoaded: false },
  action
) {
  switch (action.type) {
    case LOAD_FXPAIRS:
      let validatedFXPairs = validateFXPairs(action.fxPairs.fx);
      return {
        ...state,
        data: validatedFXPairs,
        fxPairsLoaded: true,
      };

    default:
      return { ...state };
  }
}

export { validateFXPairs };
