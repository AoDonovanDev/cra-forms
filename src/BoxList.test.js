import { fireEvent, getByPlaceholderText, queryByText, render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import Box from './Box'
import React from 'react';


it("renders without crashing", function () {
  render(<NewBoxForm />);
});

it("display form", function () {
  const {getByLabelText, queryByText} = render(<NewBoxForm />)
  const height = getByLabelText('height');
  const width = getByLabelText('width');
  const bgcolor = getByLabelText('background color');
  const btn = queryByText('add a box!')
  fireEvent.change(height, {target: {value: 200}});
  fireEvent.change(width, {target: {value: 200}});
  fireEvent.change(bgcolor, {target: {value: 'red'}})
  expect(bgcolor.value).toBe('red')
})