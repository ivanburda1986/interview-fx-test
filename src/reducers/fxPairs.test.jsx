import { validateFXPairs, filterFXByCodeAndName } from "./fxPairs";
import validateFXPairsMock from "./tests/fxPairs-validated-mock.json";
import fxPairsNamed from "./tests/fxPairs-validated-named";

describe("Takes foreign-currency-rate pairs and returns only those which are valid for the purpose of the app", () => {
  test("Excludes currencies with a code that does not have 3 characters", () => {
    expect(validateFXPairs([INVALID_CODE1, INVALID_CODE2, INVALID_CODE3, INVALID_CODE4, VALID])).toEqual([VALID]);
  });
  test("Excludes currencies with a missing name", () => {
    expect(validateFXPairs([MISSING_NAME, VALID])).toEqual([VALID]);
  });
  test("Excludes currencies with missing exchange rates", () => {
    expect(validateFXPairs([MISSING_EXCHANGE_RATES, VALID])).toEqual([VALID]);
  });
  test("Excludes currencies with a missing middle rate", () => {
    expect(validateFXPairs([MISSING_MIDDLE_RATE, VALID])).toEqual([VALID]);
  });
});

describe("Real-time currency search returns currencies matching the search criteria", () => {
  test("Entering a single letter returns all currencies with the currency code or any word of the currency name starting by the letter", () => {
    expect(filterFXByCodeAndName({ fxPairs: { ...mymock }, filterString: "#f" })).toEqual(fxPairsNamed.FJD);
  });
});

const mymock = {
  0: {
    currency: "FJD",
    precision: 2,
    nameI18N: "Fiji Dollar",
    exchangeRate: { buy: 2, middle: 2.25, sell: 2.5, indicator: 0, lastModified: "2012-02-14T23:00:00Z" },
    banknoteRate: { buy: 2.2, middle: 2.4, sell: 2.6, indicator: 0, lastModified: "2018-11-06T23:00:00Z" },
    flags: ["provided"],
  },
  1: {
    currency: "MXN",
    precision: 2,
    nameI18N: "Mexican Peso",
    exchangeRate: { buy: 22.38, middle: 22.98, sell: 23.58, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
    banknoteRate: { buy: 21.1, middle: 22.6, sell: 24.1, indicator: 0, lastModified: "2018-11-06T23:00:00Z" },
    flags: ["provided"],
  },
  2: {
    currency: "SCR",
    precision: 2,
    nameI18N: "Seychelles-Rupee",
    exchangeRate: { buy: 14.7246, middle: 15.4746, sell: 16.2246, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
    banknoteRate: { buy: 14.167, middle: 15.667, sell: 17.167, indicator: 0, lastModified: "2018-11-06T23:00:00Z" },
    flags: ["provided"],
  },
};

//TEST DATA
//Invalid currency code
const INVALID_CODE1 = {
  currency: "   ",
  nameI18N: "Middle Earth Dollar",
  exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
};
const INVALID_CODE2 = {
  currency: "ME",
  nameI18N: "Middle Earth Dollar",
  exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
};
const INVALID_CODE3 = {
  currency: "MEDL",
  nameI18N: "Middle Earth Dollar",
  exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
};
const INVALID_CODE4 = {
  currency: "",
  nameI18N: "Middle Earth Dollar",
  exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
};

//Missing name
const MISSING_NAME = {
  currency: "MED",
  exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
};

//Missing exchange rates
const MISSING_EXCHANGE_RATES = {
  currency: "MED",
  nameI18N: "Middle Earth Dollar",
};

//With missing exchange rate middle
const MISSING_MIDDLE_RATE = {
  currency: "MED",
  nameI18N: "Middle Earth Dollar",
};

//Valid currency
const VALID = {
  currency: "CZK",
  nameI18N: "Czech Koruna",
  exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
};
