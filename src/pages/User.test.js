import { render, screen } from "@testing-library/react";
import User from "../pages/User";
import { BrowserRouter } from "react-router-dom";

it("renders user info", () => {
  render(
    <BrowserRouter>
      <User />
    </BrowserRouter>
  );
  const searchPage = screen.getByText(/name:/i);
  expect(searchPage).toBeInTheDocument();
});
