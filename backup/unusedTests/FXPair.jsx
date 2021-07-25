import { render, screen, waitFor } from "@testing-library/react";
import ProviderWrapper from "../../src/testUtils/ProviderWrapper";
import FXPair from "../../src/components/FXPair/FXPair";

test("Flag gets displayed for the currency-related country", async () => {
  render(
    <ProviderWrapper>
      <FXPair currency={"HUF"} />
    </ProviderWrapper>
  );

  await waitFor(async () => {
    screen.getByAltText("hu-flag");
  });
  expect(screen.getByAltText("hu-flag")).toBeInTheDocument();
});

test("Currency code gets displayed", async () => {
  const currencyCode = "HUF";
  render(
    <ProviderWrapper>
      <FXPair currency={currencyCode} />
    </ProviderWrapper>
  );

  const items = await screen.findByText(/HUF/);
  expect(items.getByText(/HUF/)).toBeInTheDocument();
});
