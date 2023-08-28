import { fireEvent, queryByText, render, screen } from '@testing-library/react';
import Box from './Box';
import React from 'react';

const height = 100;
const width = 100;
const bgcolor = 'red'

function rmvItem(e){
    e.target.parentElement.remove()
  }

it('renders without crashing', () => {
  render(<Box height={height} width={width} bgcolor={bgcolor}/>)
});



it("matches snapshot", function() {
  const { asFragment } = render(<Box height={height} width={width} bgcolor={bgcolor} />);
  expect(asFragment()).toMatchSnapshot();
});

it("has xbtn", function() {
    const {queryByText} = render(<Box height={height} width={width} bgcolor={bgcolor} rmvItem={rmvItem}/>)

  
    expect(queryByText('X')).toBeInTheDocument();

});
