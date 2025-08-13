import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("ContactUs Page Test cases", () => {
  it("Should load Contact Us component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading", { name: /contact rasya/i });
    expect(heading).toBeInTheDocument();
  });

  it("Should load Button inside ContactUs component", () => {
    render(<ContactUs />);
    //   const button = screen.getByRole("button");

    const button = screen.getByText("Send Message");
    expect(button).toBeInTheDocument();
  });

  it("Should load Input inside ContactUs component", () => {
    render(<ContactUs />);
    const name = screen.getByPlaceholderText("Enter your name");
    expect(name).toBeInTheDocument();
  });

  it("Should load Input inside ContactUs component", () => {
    render(<ContactUs />);
    const input = screen.getAllByRole("textbox");
    //   console.log(input[0]);
    expect(input.length).toBe(3);
  });
});
