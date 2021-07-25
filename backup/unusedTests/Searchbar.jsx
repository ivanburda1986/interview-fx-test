import { render, screen } from "@testing-library/react";
import ProviderWrapper from "../../src/testUtils/ProviderWrapper";
import Searchbar from "../../src/components/Searchbar/Searchbar";

test("the search bar with a search field is displayed upon load", () => {
  render(
    <ProviderWrapper>
      <Searchbar />
    </ProviderWrapper>
  );
  const searchBar = screen.getByText(/Search/i);
  expect(searchBar).toBeInTheDocument();
  const searchField = screen.getByPlaceholderText("Currency name");
  expect(searchField).toBeInTheDocument();
});

test("the search bar sticks to the screen top when scrolling down", () => {
  //Find an element with the text George FX
  //Scroll down to a certain position
  //Make sure the header has scrolled out of the screen
});
