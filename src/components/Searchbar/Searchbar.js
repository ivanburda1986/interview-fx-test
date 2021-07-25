import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./Searchbar.module.css";

import { filterFXPairs } from "../../actions/fxPairs";

const Searchbar = ({ history }) => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = React.useState("");
  //console.log("searchString", searchString);

  //Reset the URL has upon reload
  React.useEffect(() => {
    window.location.hash = "";
  }, []);

  React.useEffect(() => {
    //Filter based on URL-hash change
    window.addEventListener("hashchange", handleSearchViaURL);
  });

  //Handle search via URL
  const handleSearchViaURL = () => {
    let regexHash = /#/gi;
    setSearchString(history.location.hash.replaceAll(regexHash, ""));
    dispatch(filterFXPairs({ hash: history.location.hash }));
  };

  //Handle search via input field
  const handleSearchViaInputField = (e) => {
    e.preventDefault();
    window.location.hash = e.target.value;
    setSearchString(e.target.value);
    dispatch(filterFXPairs({ hash: history.location.hash }));
  };

  return (
    <div className={classes.Searchbar}>
      <div className={classes.SearchbarContainer}>
        <label htmlFor="searchbar">Search</label>
        <input type="text" id="searchbar" placeholder="Currency code or name" value={searchString} onChange={(e) => handleSearchViaInputField(e)} />
      </div>
    </div>
  );
};

export default withRouter(Searchbar);
