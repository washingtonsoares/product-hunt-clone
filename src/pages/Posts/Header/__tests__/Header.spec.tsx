import { render, screen } from '@testing-library/react';
import Header from '..';
import MockDate from 'mockdate';

beforeAll(() => {
  MockDate.set('2021-05-05');
});

afterAll(() => {
  MockDate.reset();
})

test('should render the default Tabs', () => {
  render(<Header />);

  expect(screen.getByAltText('My avatar')).toBeInTheDocument();
  expect(screen.getByTitle('What are you looking for?')).toBeInTheDocument();
  expect(screen.getByText('Today, 4th May')).toBeInTheDocument();
});
