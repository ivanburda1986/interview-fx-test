import { render, screen, waitFor } from "@testing-library/react";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import FXPair from "./FXPair";

test("Flag gets displayed for the currency-related country", async () => {
  const currencyCode = "CZK";
  render(
    <ProviderWrapper>
      <FXPair currency={currencyCode} />
    </ProviderWrapper>
  );
  await waitFor(() => {
    expect(screen.getByAltText(/^[a-z]{2}-flag$/)).toBeInTheDocument();
  });
});

test("A currency pair shows the text 1 USD", () => {});

test("A currency pair shows how much of the specific currency equals to 1 USD", () => {});
