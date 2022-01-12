import { render, screen } from "@testing-library/react";
import Search from "../pages/Search";
import { BrowserRouter } from "react-router-dom";

it("does not render search button", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const searchPage = screen.getByText(/Rita Mak/i);
  expect(searchPage).toBeInTheDocument();
});

it("renders intro text", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const searchPage = screen.getByText(/github/i);
  expect(searchPage).toBeInTheDocument();
});
