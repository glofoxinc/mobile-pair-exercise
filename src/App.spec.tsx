import { render, screen } from "@testing-library/react";
import App from "./App";

test("Then should render the correct text", () => {
  render(<App />);

  expect(screen.getByText("Email:")).toBeInTheDocument();
});
