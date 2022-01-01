import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLoadServerFXPairs } from "../../actions/fxPairs";
import { filterFXByCodeAndName } from "./index";
import { FXPair } from "../FXPair";
import classes from "./FXPairsList.module.css";

export const FXPairsList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filter.filterValue);
  const fxPairs = useSelector((state) => state.fxPairs.data);
  const fxPairsLoaded = useSelector((state) => state.fxPairs.fxPairsLoaded);
  const [filteredFxPairs, setFilteredFxPairs] = React.useState([]);

  React.useEffect(() => {
    dispatch(handleLoadServerFXPairs());
  }, [dispatch]);

  React.useEffect(() => {
    setFilteredFxPairs(filterFXByCodeAndName({ fxPairs, filterValue }));
  }, [filterValue, fxPairs]);

  if (!fxPairsLoaded) {
    return <p className={classes.message}>Loading...</p>;
  }

  if (!filteredFxPairs.length) {
    return <p className={classes.message}>I'm sorry. I do not recognize the currency you are searching for.</p>;
  }

  return (
    <div className={classes.FXPairs}>
      {filteredFxPairs.map((fxPair) => (
        <FXPair fxPairData={fxPair} currencyCode={fxPair.currency} key={fxPair.currency} />
      ))}
    </div>
  );
};
