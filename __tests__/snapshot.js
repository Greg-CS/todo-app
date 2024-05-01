import { render } from "@testing-library/react";
import { Navbar } from "../src/app/components/Navbar/Navbar";
it("renders homepage unchanged", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});
