import { render, screen } from '@testing-library/react';
import Main from '../Main'
import Login from '../Login'
import {BrowserRouter} from 'react-router-dom'

test('main route rendering', () => {
  render(<Main />, {wrapper: BrowserRouter});
  const text = screen.getByText(/Main/i);
  expect(text).toBeInTheDocument();
});

test('login route rendering', () => {
  render(<Login loggedInSet={() => {}} />, {wrapper: BrowserRouter});
  const text = screen.getByText(/LOG IN/i);
  expect(text).toBeInTheDocument();
});
