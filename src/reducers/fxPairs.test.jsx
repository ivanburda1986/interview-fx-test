import { validateFXPairs, filterFXByCodeAndName } from "./fxPairs";

describe("Returns only foreign-currency-rate pairs which are valid for the purpose of the app", () => {
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

const VALID2 = {
  currency: "MXN",
  nameI18N: "Mexican Peso",
  exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
};
