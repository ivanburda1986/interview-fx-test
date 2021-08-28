import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../actions/filter";
import classes from "./Searchbar.module.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const filterValue = useSelector((state) => state.filter.filterValue);
  const searchStringRef = React.useRef("");
  const [searchBarInput, setSearchBarInput] = React.useState("");

  React.useEffect(() => {
    dispatch(setFilterValue(location.hash));
    setSearchBarInput(decodeURIComponent(location.hash).replace(/#/gi, ""));
  }, [location.hash, dispatch]);

  React.useEffect(() => {}, [filterValue]);

  const handleSearch = () => {
    setSearchBarInput(searchStringRef.current.value);
    dispatch(setFilterValue(searchStringRef.current.value));
    window.location.hash = searchStringRef.current.value;
  };

  return (
    <div className={classes.Searchbar}>
      <div className={classes.SearchbarContainer}>
        <div>
          <label htmlFor="searchbar">Search</label>
          <input type="text" id="searchbar" placeholder="Currency code or name" value={searchBarInput} ref={searchStringRef} onChange={() => handleSearch()} />
        </div>
        <a href="https://github.com/ivanburda1986/interview-fx-test" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default withRouter(Searchbar);
