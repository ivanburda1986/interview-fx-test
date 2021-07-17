import React from "react";
import { useSelector } from "react-redux";
import classes from "./FXPair.module.css";

const FXPair = ({ currencyCode }) => {
  const fxPair = Object.values(useSelector((state) => state.fxPairs)).filter((pair) => pair.currency === currencyCode)[0];
  const [flagImgSrc, setFlagImgSrc] = React.useState("");

  if (fxPair !== undefined) {
    (async function fetchImg() {
      await import(`../../flags/${fxPair.currency.slice(0, 2).toLowerCase()}.png`).then((image) => {
        setFlagImgSrc(image.default);
      });
    })();
    return (
      <div className={classes.FXPair}>
        <img src={flagImgSrc} alt={`${fxPair.currency.slice(0, 2).toLowerCase()}-flag`} />
      </div>
    );
  } else {
    return <img src={flagImgSrc} alt={`${currencyCode}-flag`} />;
  }
};

export default FXPair;
