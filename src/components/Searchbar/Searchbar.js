import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../actions/filter";
import classes from "./Searchbar.module.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchStringRef = React.useRef("");

  const [searchBarInput, setSearchBarInput] = React.useState("");
  const filterValue = useSelector((state) => state.filter.filterValue);
  const isFXPairsInitialLoadFinished = Object.values(useSelector((state) => state.fxPairs.backup));

  //Trigger searching based on the URL-hash change
  React.useEffect(() => {}, [location.hash]);

  React.useEffect(() => {}, [filterValue]);

  const handleSearchViaURL = () => {
    setSearchBarInput(location.hash.replaceAll(/#/gi, "").replaceAll(/%20/gi, " "));
    // dispatch(filterFXPairs({ searchHash: location.hash }));
    dispatch(setFilterValue(location.hash));
  };

  const handleSearch = (e) => {
    setSearchBarInput(searchStringRef.current.value);
    dispatch(setFilterValue(searchStringRef.current.value));
  };

  return (
    <div className={classes.Searchbar}>
      <div className={classes.SearchbarContainer}>
        <div>
          <label htmlFor="searchbar">Search</label>
          <input type="text" id="searchbar" placeholder="Currency code or name" value={searchBarInput} ref={searchStringRef} onChange={(e) => handleSearch(e)} />
        </div>
        <a href="https://github.com/ivanburda1986/interview-fx-test" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default withRouter(Searchbar);
