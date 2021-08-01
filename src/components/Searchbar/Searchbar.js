import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { filterFXPairs } from "../../actions/fxPairs";

import classes from "./Searchbar.module.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchString, setSearchString] = React.useState("");

  //Removes from the URL search hash upon page reload
  React.useEffect(() => {
    window.location.hash = "";
  }, []);

  //Trigger searching based on the URL-hash change
  React.useEffect(() => {
    handleSearchViaURL();
  }, [location.hash]);

  const handleSearchViaURL = () => {
    setSearchString(location.hash.replaceAll(/#/gi, "").replaceAll(/%20/gi, " "));
    dispatch(filterFXPairs({ searchHash: location.hash }));
  };

  //Trigger searching based on the Search input field change
  const handleSearchViaInputField = (e) => {
    e.preventDefault();
    window.location.hash = e.target.value;
    setSearchString(e.target.value);
    dispatch(filterFXPairs({ searchHash: window.location.hash }));
  };

  return (
    <div className={classes.Searchbar}>
      <div className={classes.SearchbarContainer}>
        <div>
          <label htmlFor="searchbar">Search</label>
          <input type="text" id="searchbar" placeholder="Currency code or name" value={searchString} onChange={(e) => handleSearchViaInputField(e)} />
        </div>
        <a href="https://github.com/ivanburda1986/interview-fx-test" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default withRouter(Searchbar);
