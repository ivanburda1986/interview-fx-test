import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoadServerFXPairs } from "../../actions/fxPairs";
import FXPair from "../FXPair/FXPair";
import classes from "./FXPairsList.module.css";

const filterFXByCodeAndName = function ({ fxPairs, filterValue }) {
  let results = Object.values(fxPairs).filter((fxPair) => {
    let relevantCurrencyCodePart = fxPair.currency.toLowerCase().slice(0, filterValue.length);
    let currencyNameIndividualWords = fxPair.nameI18N.toLowerCase().split(" ");
    let currencyNameConjoinedPart = fxPair.nameI18N.replace(/\s+/g, "").toLowerCase().slice(0, filterValue.length);
    return relevantCurrencyCodePart === filterValue || currencyNameIndividualWords.some((word) => word.startsWith(filterValue)) || currencyNameConjoinedPart === filterValue;
  });
  return results;
};

export default function FXPairsList() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filter.filterValue);
  const fxPairs = Object.values(useSelector((state) => state.fxPairs.data));
  const fxPairsLoaded = useSelector((state) => state.fxPairs.fxPairsLoaded);
  const [filteredFxPairs, setFilteredFxPairs] = React.useState([]);

  React.useEffect(() => {
    dispatch(handleLoadServerFXPairs());
  }, []);

  React.useEffect(() => {
    setFilteredFxPairs(filterFXByCodeAndName({ fxPairs, filterValue }));
  }, [filterValue, fxPairsLoaded]);

  const displayFXPairs = ({ fxPairs, filteredFxPairs, filterValue }) => {
    let display = [];
    let message = "";
    if (!fxPairsLoaded) {
      message = "Loading...";
    } else if (filterValue && filteredFxPairs.length > 0) {
      display = filteredFxPairs.map((fxPair) => <FXPair fxPairData={fxPair} currencyCode={fxPair.currency} key={fxPair.currency} />);
      message = "";
    } else if (filterValue && filteredFxPairs.length === 0) {
      message = "I'm sorry. I do not recognize the currency you are searching for. ";
    } else {
      message = "";
      display = fxPairs.map((fxPair) => <FXPair fxPairData={fxPair} currencyCode={fxPair.currency} key={fxPair.currency} />);
    }
    return { display, message };
  };

  return (
    <div className={classes.FXPairs}>
      {displayFXPairs({ fxPairs, filteredFxPairs, filterValue }).message}
      {displayFXPairs({ fxPairs, filteredFxPairs, filterValue }).display}
    </div>
  );
}

export { filterFXByCodeAndName };
