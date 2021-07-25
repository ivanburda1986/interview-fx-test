import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Searchbar.module.css";

import { filterFXPairs } from "../../actions/fxPairs";

const Searchbar = ({ history }) => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.fxPairs.searchString);

  //Reset the URL has upon reload
  React.useEffect(() => {
    window.location.hash = "";
  }, []);

  const handleSearchRequest = (e) => {
    e.preventDefault();
    window.location.hash = e.target.value;
    dispatch(filterFXPairs({ hash: history.location.hash }));
  };

  return (
    <div className={classes.Searchbar}>
      <label htmlFor="searchbar">Search</label>
      <input type="text" id="searchbar" placeholder="Currency name" value={searchString} onChange={(e) => handleSearchRequest(e)} />
    </div>
  );
};

export default withRouter(Searchbar);
