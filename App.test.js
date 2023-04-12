import { render, screen } from "@testing-library/react";
import Home from "./src/pages/home/Home.jsx";

test("Testing if the component is rendering correctly", () => {
  render(<Home />);
  const sampleText = screen.getByText(/clone wars/i);

  expect(sampleText).toBeInTheDocument();
});
