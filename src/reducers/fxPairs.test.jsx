import { validateFXPairs, filterFXByCodeAndName } from "./fxPairs";

describe("Returns only foreign-currency-rate pairs which are valid for the purpose of the app", () => {
  test("Excludes currencies with a code that does not have 3 characters", () => {});
  test("Excludes currencies with a missing name", () => {});
  test("Excludes currencies with ", () => {});
});
