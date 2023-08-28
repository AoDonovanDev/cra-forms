import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

it("renders without crashing", function () {
  render(<NewToDoForm />);
});
it("matches snapshot", function () {
  const { asFragment } = render(<NewToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});
it("renders form btn", function () {
  render(<NewToDoForm/>)
  const task = screen.getByText('add a todo!')
  expect(task).toBeInTheDocument()
})

