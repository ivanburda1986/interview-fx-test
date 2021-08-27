import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleLoadServerFXPairs } from "../../actions/fxPairs";

import FXPair from "../FXPair/FXPair";

import classes from "./FXPairsList.module.css";

export default function FXPairsList() {
  const dispatch = useDispatch();
  const fxPairs = Object.values(useSelector((state) => state.fxPairs.data));

  //Request FX data
  React.useEffect(() => {
    dispatch(handleLoadServerFXPairs());
  }, [dispatch]);

  const displayFXPairs = ({ fxPairs }) => {
    let display = fxPairs.map((pair) => <FXPair pairData={pair} currencyCode={pair.currency} key={pair.currency} />);
    if (display.length === 0) {
      display = <p>I'm sorry. I do not recognize the currency you are searching for. </p>;
    }
    return display;
  };

  return <div className={classes.FXPairs}>{displayFXPairs({ fxPairs })}</div>;
}
