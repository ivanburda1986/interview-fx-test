import { SET_FILTER_VALUE } from "../actions/filter";

export default function setFilterValue(state = { filterValue: "" }, action) {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.filterValue,
      };
    default:
      return { ...state };
  }
}
