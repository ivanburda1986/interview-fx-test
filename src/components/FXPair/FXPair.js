import React from "react";
import { useSelector } from "react-redux";

import placeholderFlag from "../../flags/placeholderFlag.png";

import classes from "./FXPair.module.css";

const FXPair = ({ currencyCode }) => {
  const fxPair = Object.values(useSelector((state) => state.fxPairs.data)).filter((pair) => pair.currency === currencyCode)[0];
  const [fXRate, setFXRate] = React.useState(1.0);
  const [currencyName, setCurrencyName] = React.useState("");
  const [flagImgSrc, setFlagImgSrc] = React.useState("");
  const [imgAlt, setImgAlt] = React.useState("");

  React.useEffect(() => {
    if (fxPair !== undefined) {
      (async function fetchImg() {
        await import(`../../flags/${fxPair.currency.slice(0, 2).toLowerCase()}.png`)
          .then((image) => {
            setImgAlt(`Flag of the country with the currency: ${fxPair.currency}`);
            setFlagImgSrc(image.default);
          })
          .catch(() => {
            setImgAlt(`A placeholder image - a flag for this currency is unavailable.`);
            setFlagImgSrc(placeholderFlag);
          });
      })();
      setFXRate(fxPair.exchangeRate.middle);
      setCurrencyName(fxPair.nameI18N);
    }
  }, [fxPair]);

  return (
    <div className={classes.FXPair}>
      <img src={flagImgSrc} alt={imgAlt} />
      <p className={classes.CurrencyCode}>{currencyCode}</p>
      <p className={classes.CurrencyName}>{currencyName}</p>
      <p className={classes.fXRate}>{fXRate.toFixed(2)} / € </p>
    </div>
  );
};

export default FXPair;
