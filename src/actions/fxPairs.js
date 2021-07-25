import { loadServerFXPairs } from "../api/api";

export const LOAD_FXPAIRS = "LOAD_FXPAIRS";
export const FILTER_FXPAIRS = "FILTER_FXPAIRS";

//LOAD FX PAIRS
function loadFXPairs(fxPairs) {
  return {
    type: LOAD_FXPAIRS,
    fxPairs,
  };
}

export function handleLoadServerFXPairs() {
  return (dispatch) => {
    loadServerFXPairs().then((data) => {
      dispatch(loadFXPairs(data));
    });
  };
}

//FILTER_FXPAIRS
export function filterFXPairs({ searchHash }) {
  return {
    type: FILTER_FXPAIRS,
    searchHash,
  };
}
