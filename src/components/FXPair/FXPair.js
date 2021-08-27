import React from "react";
import placeholderFlag from "../../flags/placeholderFlag.png";
import classes from "./FXPair.module.css";

const FXPair = ({ pairData }) => {
  const [flagImgSrc, setFlagImgSrc] = React.useState("");
  const [imgAlt, setImgAlt] = React.useState("");

  React.useEffect(() => {
    (async function fetchImg() {
      await import(`../../flags/${pairData.currency.slice(0, 2).toLowerCase()}.png`)
        .then((image) => {
          setImgAlt(`Flag of the country with the currency: ${pairData.currency}`);
          setFlagImgSrc(image.default);
        })
        .catch(() => {
          setImgAlt(`A placeholder image - a flag for this currency is unavailable.`);
          setFlagImgSrc(placeholderFlag);
        });
    })();
  }, [pairData]);

  return (
    <div className={classes.FXPair}>
      <img src={flagImgSrc} alt={imgAlt} />
      <p className={classes.CurrencyCode}>{pairData.currencyCode}</p>
      <p className={classes.CurrencyName}>{pairData.nameI18N}</p>
      <p className={classes.fXRate}>{pairData.exchangeRate.middle.toFixed(2)} / € </p>
    </div>
  );
};

export default FXPair;
