import React from "react";
import { useSelector } from "react-redux";

import classes from "./FXPair.module.css";

import placeholderFlag from "../../flags/placeholderFlag.png";

const FXPair = ({ currencyCode }) => {
  const fxPair = Object.values(useSelector((state) => state.fxPairs.data)).filter((pair) => pair.currency === currencyCode)[0];
  const [fXRate, setFXRate] = React.useState(1.0);
  const [flagImgSrc, setFlagImgSrc] = React.useState("");
  const [imgAlt, setImgAlt] = React.useState("");
  const [currencyName, setCurrencyName] = React.useState("");

  React.useEffect(() => {
    if (fxPair !== undefined) {
      (async function fetchImg() {
        await import(`../../flags/${fxPair.currency.slice(0, 2).toLowerCase()}.png`)
          .then((image) => {
            setImgAlt(`${fxPair.currency.slice(0, 2).toLowerCase()}-flag`);
            setFlagImgSrc(image.default);
          })
          .catch(() => {
            setImgAlt(`default-flag`);
            setFlagImgSrc(placeholderFlag);
          });
      })();
      setFXRate(fxPair.exchangeRate.middle);
      setCurrencyName(fxPair.nameI18N);
    }
  }, [fxPair, flagImgSrc, imgAlt, fXRate]);

  return (
    <div className={classes.FXPair}>
      <img src={flagImgSrc} alt={imgAlt} />
      <p className={classes.CurrencyToBuy}>{currencyCode}</p>
      <p className={classes.CurrencyName}>{currencyName}</p>
      <p className={classes.fXRate}>EUR {(1 / fXRate).toFixed(3)}</p>
    </div>
  );
};

export default FXPair;
