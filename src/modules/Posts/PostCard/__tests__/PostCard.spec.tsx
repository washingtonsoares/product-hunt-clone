import { render, screen } from '@testing-library/react';
import { Post } from 'core/types/Post';
import PostCard from '../';

const postMock = {
  name: 'post 1',
  tagline: 'The best post',
  votesCount: 1,
  thumbnail: {
    url: 'image.jpg'
  }
} as Post;

test('should render PostCard', () => {
  render(<PostCard post={postMock} />);

  expect(screen.getByText(postMock.name)).toBeInTheDocument();
  expect(screen.getByText(postMock.tagline)).toBeInTheDocument();
  expect(screen.getByAltText(postMock.name)).toBeInTheDocument();
  expect(screen.getByText(postMock.votesCount)).toBeInTheDocument();
})