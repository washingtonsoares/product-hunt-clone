import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import PostsList from '..';
import { postsMock } from './fixtures';

test('should render Posts page', async () => {
  render(
    <BrowserRouter>
      <MockedProvider mocks={postsMock}>
        <PostsList order="VOTES" />
      </MockedProvider>
    </BrowserRouter>
  );

  expect(screen.getByTitle('Loading...')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTitle('Loading...'));

  expect(screen.getByText('Crello')).toBeInTheDocument();
  expect(screen.getByText('Add animation to your content easily.')).toBeInTheDocument();
  expect(screen.getByText('5398')).toBeInTheDocument();
  expect(screen.getByText('Sublime Text 3.0')).toBeInTheDocument();
  expect(screen.getByText('The long awaited version 3 of the popular code editor')).toBeInTheDocument();
  expect(screen.getByText('5352')).toBeInTheDocument();
})
