import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleLoadServerFXPairs } from "../../actions/fxPairs";

import FXPair from "../../components/FXPair/FXPair";

import classes from "./FXPairs.module.css";

export default function FXPairsList() {
  const dispatch = useDispatch();
  const fxPairs = Object.values(useSelector((state) => state.fxPairs.data));

  React.useEffect(() => {
    dispatch(handleLoadServerFXPairs());
  }, [dispatch]);

  const displayFXPairs = () => {
    let display = fxPairs.map((pair) => <FXPair currencyCode={pair.currency} key={pair.currency} />);
    if (display.length === 0) {
      display = <p>No matching currency found ... </p>;
    }
    return display;
  };

  return <div className={classes.FXPairs}>{displayFXPairs()}</div>;
}
