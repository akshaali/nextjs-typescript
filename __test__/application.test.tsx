import { render, screen } from "@testing-library/react";
import Application from "@pages/application";

describe("Application ==>>", () => {
  test("renders coorectly", () => {
    render(<Application />);

    // getByRole
    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
    });
    expect(pageHeading).toBeInTheDocument();

    const subHeading = screen.getByRole("heading", {
      // name: "Section 1",
      level: 2,
    });
    expect(subHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    //getByLabelText
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    //getByPlaceHolderText
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //getByText (typically used for div or span)
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    //getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("Aksha");
    expect(nameElement4).toBeInTheDocument();

    //getByAltText
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    //getByTitle
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //getByTestId
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
