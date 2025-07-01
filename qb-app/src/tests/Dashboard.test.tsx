import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Dashboard from "../pages/index";

test("renders dashboard title", () => {
  render(<Dashboard />);
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});
test("renders user info", () => {
  render(<Dashboard />);
  expect(screen.getByText("User Info")).toBeInTheDocument();
});