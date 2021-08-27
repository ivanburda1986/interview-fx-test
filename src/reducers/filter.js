import { SET_FILTER_VALUE } from "../actions/filter";

export default function setFilterValue(state = { filterValue: "" }, action) {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: decodeURIComponent(action.filterValue).replace(/\s+/g, "").replace(/#/gi, "").toLowerCase(),
      };
    default:
      return { ...state };
  }
}
