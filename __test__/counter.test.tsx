import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "@pages/counter";

describe("Counter", () => {
  test("should render a counter", () => {
    render(<Counter />);
    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toBeInTheDocument();
    const incButtonElement = screen.getByRole("button", { name: "Increment" });
    expect(incButtonElement).toBeInTheDocument();
    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();
    const setButtonElement = screen.getByRole("button", { name: "Set" });
    expect(setButtonElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const conterElement = screen.getByRole("heading", { level: 1 });
    expect(conterElement).toHaveTextContent("0");
  });

  test("renders a count of 1", async () => {
    render(<Counter />);
    const incButtonElement = screen.getByRole("button", { name: "Increment" });
    await user.click(incButtonElement);
    const conterElement = screen.getByRole("heading", { level: 1 });
    expect(conterElement).toHaveTextContent("1");
  });

  test("renders a count of after clicking incButton twice", async () => {
    render(<Counter />);
    const incButtonElement = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incButtonElement);
    // await user.click(incButtonElement);
    const conterElement = screen.getByRole("heading", { level: 1 });
    expect(conterElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountElement = screen.getByRole("spinbutton");
    await user.type(amountElement, "10");
    expect(amountElement).toHaveValue(10);
    const setButtonElement = screen.getByRole("button", { name: "Set" });
    await user.click(setButtonElement);
    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toHaveTextContent("10");
  });

  test("to have focus in right direction", async () => {
    render(<Counter />);
    
  })
});
