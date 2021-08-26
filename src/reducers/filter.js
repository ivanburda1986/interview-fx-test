import { SET_FILTER } from "../actions/filter";

export default function setFilter(state = { filterValue: "" }, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filterValue: action.filterValue,
      };
    default:
      return { ...state };
  }
}
