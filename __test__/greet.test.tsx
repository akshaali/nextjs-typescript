import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greet from "@pages/greet";

test("Greet renders coorectly", () => {
  render(<Greet />);
  const testElement = screen.getByText("Hello");
  expect(testElement).toBeInTheDocument();
});

test("Greet renders correctly with props", () => {
  render(<Greet name={{ firstName: "Aksha", lastName: "Ali" }} />);
  const testElement = screen.getByText("Hello Aksha");
  expect(testElement).toBeInTheDocument();
});
