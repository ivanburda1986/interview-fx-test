import { loadServerFXPairs } from "../api/api";
export const LOAD_FXPAIRS = "LOAD_FXPAIRS";

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
