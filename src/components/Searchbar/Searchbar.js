import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../../actions/filter";
import classes from "./Searchbar.module.css";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchStringRef = React.useRef(null);
  const [searchBarInput, setSearchBarInput] = React.useState("");

  React.useEffect(() => {
    const filterValue = decodeURIComponent(location.hash).replace(/#/gi, "");
    dispatch(setFilterValue(filterValue));
    setSearchBarInput(filterValue);
  }, [location.hash, dispatch]);

  const handleSearch = React.useCallback(() => {
    window.location.hash = searchStringRef.current.value;
  }, []);

  return (
    <div className={classes.Searchbar}>
      <div className={classes.SearchbarContainer}>
        <div>
          <label htmlFor="searchbar">Search</label>
          <input type="text" id="searchbar" placeholder="Currency code or name" value={searchBarInput} ref={searchStringRef} onChange={handleSearch} />
        </div>
        <a href="https://github.com/ivanburda1986/interview-fx-test" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};
