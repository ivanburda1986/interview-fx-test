export const SET_FILTER_VALUE = "SET_FILTER_VALUE";

function setFilterValue(filterValue) {
  return {
    type: SET_FILTER_VALUE,
    filterValue,
  };
}

export { setFilterValue };
