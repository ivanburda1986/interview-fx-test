import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Searchbar.module.css";

import { filterFXPairs } from "../../actions/fxPairs";

const Searchbar = () => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.fxPairs.searchString);

  const handleSearchRequest = (e) => {
    e.preventDefault();
    dispatch(filterFXPairs(e.target.value));
    //window.location.hash = e.target.value;
  };

  return (
    <div className={classes.Searchbar}>
      <label htmlFor="searchbar">Search</label>
      <input type="text" id="searchbar" placeholder="Currency name" value={searchString} onChange={(e) => handleSearchRequest(e)} />
    </div>
  );
};

export default Searchbar;
