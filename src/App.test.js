import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Auth0 Login/i);
  expect(linkElement).toBeInTheDocument();
});
