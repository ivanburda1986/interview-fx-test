export const SET_FILTER = "SET_FILTER";

function setFilter(filterValue) {
  return {
    type: SET_FILTER,
    filterValue,
  };
}
