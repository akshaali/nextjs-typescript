import { render, screen } from "@testing-library/react";
import Skills from "@pages/skills";

describe("Skills", () => {
  const skills = [
    "HTML",
    "CSS",
    "CSS2",
    "CSS3",
    "CSS4",
    "CSS5",
  ];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("remders list item correctly", () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });

  //regex match
  test("renders text correctly", () => {
    render(<Skills skills={skills} />);
    const headingElement = screen.getByText(/hey/i);
    expect(headingElement).toBeInTheDocument();
  });

  //custom function
  test("renders text correctly custom function", () => {
    render(<Skills skills={skills} />);
    const headingElement = screen.getByText((content) =>
      content.startsWith("Hey")
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("render login button correctly", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole("button", { name: "Login" });
    expect(loginButtonElement).toBeInTheDocument();
  });

  //not to render test
  test("render learning button", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(loginButtonElement).not.toBeInTheDocument();
  });

  //findBy - test if an element comes after a while in the DOM
  test("render learning button displayes after a while", async () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(loginButtonElement).toBeInTheDocument();
  });
});
