import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleLoadServerFXPairs } from "../../actions/fxPairs";

import FXPair from "../../components/FXPair/FXPair";

import classes from "./FXPairsList.module.css";

export default function FXPairsList() {
  const dispatch = useDispatch();
  const fxPairs = Object.values(useSelector((state) => state.fxPairs.data));
  const backup = useSelector((state) => state.fxPairs.backup);

  //Request FX data
  React.useEffect(() => {
    dispatch(handleLoadServerFXPairs());
  }, [dispatch]);

  /*   React.useEffect(() => {
    let print = {};
    if (backup) {
      Object.values(backup).forEach((item) => (print[item.currency] = { ...item }));
    }
    console.log(JSON.stringify(print));
  }, [backup]); */

  const displayFXPairs = ({ fxPairs }) => {
    let display = fxPairs.map((pair) => <FXPair currencyCode={pair.currency} key={pair.currency} />);
    if (display.length === 0) {
      display = <p>I'm sorry. I do not recognize the currency you are searching for. </p>;
    }
    return display;
  };

  return <div className={classes.FXPairs}>{displayFXPairs({ fxPairs })}</div>;
}
