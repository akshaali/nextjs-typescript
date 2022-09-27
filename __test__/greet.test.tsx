import { render, screen } from "@testing-library/react";
import Greet from "@pages/greet";

describe("Greet", () => {
  test("renders coorectly", () => {
    render(<Greet />);
    const testElement = screen.getByText("Hello");
    expect(testElement).toBeInTheDocument();
  });

  test("renders correctly with props", () => {
    render(<Greet name={{ firstName: "Aksha", lastName: "Ali" }} />);
    const testElement = screen.getByText("Hello Aksha");
    expect(testElement).toBeInTheDocument();
  });
});
