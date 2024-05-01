import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../src/app/components/Navbar/Navbar";

describe("Navbar", () => {
  it("should have a text saying 'todo app'", () => {
    render(<Navbar />);

    const navbarElement = screen.getByText("Todo App"); // ACT

    expect(navbarElement).toBeInTheDocument(); // ASSERT
  });
});
