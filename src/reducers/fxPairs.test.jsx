import { validateFXPairs, filterFXByCodeAndName } from "./fxPairs";

describe("Returns only foreign-currency-rate pairs which are valid for the purpose of the app", () => {
  test("Excludes currencies with a code that does not have 3 characters", () => {
    expect(validateFXPairs(CZK)).toBe("CZK");
  });
  test("Excludes currencies with a missing name", () => {});
  test("Excludes currencies with missing exchange rates", () => {});
  test("Excludes currencies with a missing middle rate", () => {});
});

//TEST DATA

//Invalid currency code
const INVALID_CODE1 = { currency: "   ", precision: 2, banknoteRate: { buy: 882.5, middle: 882.5, sell: 882.5, indicator: 0, lastModified: "2008-08-06T22:00:00Z" }, flags: ["provided"] };
const INVALID_CODE2 = { currency: "EU", precision: 2, banknoteRate: { buy: 882.5, middle: 882.5, sell: 882.5, indicator: 0, lastModified: "2008-08-06T22:00:00Z" }, flags: ["provided"] };
const INVALID_CODE3 = { currency: "EURO", precision: 2, banknoteRate: { buy: 882.5, middle: 882.5, sell: 882.5, indicator: 0, lastModified: "2008-08-06T22:00:00Z" }, flags: ["provided"] };
const INVALID_CODE4 = { currency: "", precision: 2, banknoteRate: { buy: 882.5, middle: 882.5, sell: 882.5, indicator: 0, lastModified: "2008-08-06T22:00:00Z" }, flags: ["provided"] };

//Missing name
const CDF = { currency: "CDF", precision: 2, flags: ["provided"] };

//Missing exchange rates
const LSL = { currency: "LSL", precision: 2, nameI18N: "Lesotho Loti" };

//With missing exchange rate middle
const MISSING_MIDDLE_RATE = {
  currency: "ABC",
  precision: 0,
  nameI18N: "Imaginary currency",
  exchangeRate: { buy: 1205.0, sell: 1355.0, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
  banknoteRate: { buy: 1080.0, sell: 1480.0, indicator: 0, lastModified: "2018-11-06T23:00:00Z" },
  flags: ["provided"],
};

//Valid currency
const CZK = [
  {
    currency: "CZK",
    precision: 2,
    nameI18N: "Czech Koruna",
    denominations: [5000, 2000, 1000, 500, 200, 100],
    exchangeRate: { buy: 25.575, middle: 25.925, sell: 26.275, indicator: 0, lastModified: "2018-11-08T23:00:00Z" },
    banknoteRate: { buy: 24.55, middle: 25.9, sell: 27.25, indicator: 0, lastModified: "2018-11-06T23:00:00Z" },
    flags: ["provided"],
  },
];

//https://stackoverflow.com/questions/39193533/how-to-test-json-parse-in-jest
