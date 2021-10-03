import React from "react";
import placeholderFlag from "../../flags/placeholderFlag.png";
import classes from "./FXPair.module.css";

export const FXPair = ({ fxPairData }) => {
  const [flagImgSrc, setFlagImgSrc] = React.useState("");
  const [imgAlt, setImgAlt] = React.useState("");

  React.useEffect(() => {
    (async function fetchImg() {
      await import(`../../flags/${fxPairData.currency.slice(0, 2).toLowerCase()}.png`)
        .then((image) => {
          setImgAlt(`Flag of the country with the currency: ${fxPairData.currency}`);
          setFlagImgSrc(image.default);
        })
        .catch(() => {
          setImgAlt(`A placeholder image - a flag for this currency is unavailable.`);
          setFlagImgSrc(placeholderFlag);
        });
    })();
  }, [fxPairData]);

  return (
    <div className={classes.FXPair}>
      <img src={flagImgSrc} alt={imgAlt} />
      <p className={classes.CurrencyCode}>{fxPairData.currency}</p>
      <p className={classes.CurrencyName}>{fxPairData.nameI18N}</p>
      <p className={classes.fXRate}>{fxPairData.exchangeRate.middle.toFixed(2)} / € </p>
    </div>
  );
};
