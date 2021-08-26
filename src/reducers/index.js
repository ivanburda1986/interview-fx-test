import { combineReducers } from "redux";
import fxPairs from "./fxPairs";
import filter from "./filter";

export default combineReducers({ fxPairs, filter });
