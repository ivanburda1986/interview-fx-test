import { loadServerFXPairs } from "../api/api";
import ApiMocked from "../api/api-mocked.json";

export const LOAD_FXPAIRS = "LOAD_FXPAIRS";

function loadFXPairs(fxPairs) {
  return {
    type: LOAD_FXPAIRS,
    fxPairs,
  };
}

export function handleLoadServerFXPairs() {
  return (dispatch) => {
    loadServerFXPairs()
      .then((data) => {
        dispatch(loadFXPairs(data));
      })
      .catch(({ message }) => {
        console.log("Loading live FX data from the server failed. Using a local mockfile instead.");
        dispatch(loadFXPairs(ApiMocked));
      });
  };
}
