import { render, screen } from '@testing-library/react';
import { Post } from 'core/types/Post';
import { BrowserRouter } from 'react-router-dom';
import Card from '..';

const postMock = {
  name: 'post 1',
  tagline: 'The best post',
  votesCount: 1,
  thumbnail: {
    url: 'image.jpg'
  }
} as Post;

test('should render PostCard', () => {
  render(
    <BrowserRouter>
      <Card post={postMock} />
    </BrowserRouter>
  );

  expect(screen.getByText(postMock.name)).toBeInTheDocument();
  expect(screen.getByText(postMock.tagline)).toBeInTheDocument();
  expect(screen.getByAltText(postMock.name)).toBeInTheDocument();
  expect(screen.getByText(postMock.votesCount)).toBeInTheDocument();
});