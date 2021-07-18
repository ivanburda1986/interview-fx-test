import React from "react";
import { useSelector } from "react-redux";
import classes from "./FXPair.module.css";

const FXPair = ({ currencyCode }) => {
  const fxPair = Object.values(useSelector((state) => state.fxPairs)).filter((pair) => pair.currency === currencyCode)[0];
  const [flagImgSrc, setFlagImgSrc] = React.useState("../../flags/de.png");
  const [imgAlt, setImgAlt] = React.useState("de-flag");

  React.useEffect(() => {
    if (fxPair !== undefined) {
      (async function fetchImg() {
        await import(`../../flags/${fxPair.currency.slice(0, 2).toLowerCase()}.png`).then((image) => {
          setImgAlt(`${fxPair.currency.slice(0, 2).toLowerCase()}-flag`);
          setFlagImgSrc(image.default);
        });
      })();
    }
  }, [fxPair, flagImgSrc]);

  return (
    <div className={classes.FXPair}>
      <img src={flagImgSrc} alt={imgAlt} />
    </div>
  );
};

export default FXPair;
