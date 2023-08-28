import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BoxList from './BoxList';
import ToDoList from './ToDoList';
import React from 'react';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows todo list and box apps', () => {
  render(<App />);
  const task = screen.getByText('add a todo!');
  const box = screen.getByText('add a box!');
  expect(task).toBeInTheDocument();
  expect(box).toBeInTheDocument();
})
it('adds todos', () => {
  render(<App />)
  const task = screen.getByLabelText('todo');
  const btn = screen.getByText('add a todo!');
  fireEvent.change(task, {target: {value:"clean"}});
  fireEvent.click(btn);
  const xbtn = screen.getByText('X')
  const todo = screen.getByText("clean")
  expect(xbtn).toBeInTheDocument();
  expect(todo).toBeInTheDocument();
  //it removes also
  fireEvent.click(xbtn);
  expect(todo).not.toBeInTheDocument();
})
