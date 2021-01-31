import { useQuery } from '@apollo/client';
import * as Styled from './styled';
import PostCard from "../PostCard";
import { PostResponse } from 'core/types/Post';
import PostLoader from '../Loader';
import { POSTS_QUERY } from './queries';

interface Props {
  order: 'NEWEST' | 'VOTES'
}

export default function PostsList({ order }: Props) {
  const { loading, data } = useQuery<PostResponse>(POSTS_QUERY, {
    variables: {
      first: 10,
      order
    }
  });

  const posts = data?.posts.edges;

  return (
    <Styled.Content>
      {loading ? (
        <PostLoader />
      ) : (
          posts?.map(post => (
            <PostCard post={post.node} key={post.node.id} />
          ))
        )}
    </Styled.Content>
  )
}