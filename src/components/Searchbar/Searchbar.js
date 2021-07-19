import React from "react";
import classes from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={classes.Searchbar}>
      <label htmlFor="searchbar">Search</label>
      <input type="text" id="searchbar" placeholder="Currency name" />
    </div>
  );
};

export default Searchbar;
