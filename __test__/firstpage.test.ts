import { render, screen, cleanup } from "@testing-library/react";
import Home from "../pages/index";

// test("Should render the home page", () => {
//   render(<Home/>);
//   expect(true).toBe(true);
// });

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
