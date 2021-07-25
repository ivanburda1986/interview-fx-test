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
    return fxPairs.map((pair) => <FXPair currencyCode={pair.currency} key={pair.currency} />);
  };

  return <div className={classes.FXPairs}>{displayFXPairs()}</div>;
}
