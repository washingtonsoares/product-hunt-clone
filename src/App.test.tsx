import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('tabs')).toBeInTheDocument();
  expect(screen.getByTestId('posts-list')).toBeInTheDocument();
});
