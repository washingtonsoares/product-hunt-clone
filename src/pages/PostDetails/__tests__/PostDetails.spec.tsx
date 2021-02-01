import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import mockedReactRouterDom, { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import PostDetails from '../';
import { postDetailsMock } from './fixtures';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as typeof mockedReactRouterDom,
  useParams: () => ({
    postId: 1
  })
}));

test('should render PostDetails', async () => {
  render(
    <BrowserRouter>
      <MockedProvider mocks={postDetailsMock}>
        <PostDetails />
      </MockedProvider>
    </BrowserRouter>
  );

  expect(screen.getByTitle('Loading...')).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByTitle('Loading...'));

  expect(screen.getByTitle('Go back')).toBeInTheDocument();
  expect(screen.getByTitle('Actions')).toBeInTheDocument();
  expect(screen.getByAltText('Startup Stash')).toBeInTheDocument();
  expect(screen.getByText('Startup Stash')).toBeInTheDocument();
  expect(screen.getByText('Fake description')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Get it' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Upvote (20965)' })).toBeInTheDocument();
});
