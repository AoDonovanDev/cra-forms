import { fireEvent, getByPlaceholderText, queryByText, render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import React from 'react';


it("renders without crashing", function () {
  render(<NewBoxForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("should have all controls", async function () {
  const {getByLabelText, queryByText} = render(<NewBoxForm />)
  const height = getByLabelText('height');
  const width = getByLabelText('width');
  const bgcolor = getByLabelText('background color');
  const btn = queryByText('add a box!')
  
  expect(height).toBeInTheDocument();
  expect(width).toBeInTheDocument();
  expect(bgcolor).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
})