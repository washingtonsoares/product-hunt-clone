import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Tabs from '..';

test('should render the default Tabs', () => {
  render(
    <BrowserRouter>
      <Tabs />
    </BrowserRouter>
  );

  expect(screen.getByText('Popular')).toBeInTheDocument();
  expect(screen.getByText('Newest')).toBeInTheDocument();
});

test('should switch between tabs', () => {
  render(
    <BrowserRouter>
      <Tabs />
    </BrowserRouter>
  );

  const newestTabElement = screen.getByText('Newest');
  const popularTabElement = screen.getByText('Popular');
  expect(popularTabElement).toHaveClass('active');

  userEvent.click(newestTabElement);

  expect(newestTabElement).toHaveClass('active');
  expect(popularTabElement).not.toHaveClass('active');
});
