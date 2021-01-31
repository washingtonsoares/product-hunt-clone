import { useQuery } from '@apollo/client';
import * as Styled from './styled';
import PostCard from "../PostCard";
import { PostResponse } from 'core/types/Post';
import PostLoader from '../Loader';
import { POSTS_QUERY } from './queries';

const DEFAULT_DATA_LENGTH = 0;
const DEFAULT_HAS_NEXT = true;

interface Props {
  order: 'NEWEST' | 'VOTES'
}

export default function PostsList({ order }: Props) {
  const { data, fetchMore } = useQuery<PostResponse>(POSTS_QUERY, {
    variables: {
      first: 10,
      order
    }
  });

  const posts = data?.posts?.edges;

  const fetchMoreData = () => {
    fetchMore({
      variables: {
        cursor: data?.posts.pageInfo.endCursor
      }
    })
  }

  return (
    <Styled.Content>
      <Styled.InfiniteScroll
        dataLength={posts?.length ?? DEFAULT_DATA_LENGTH}
        next={fetchMoreData}
        hasMore={data?.posts.pageInfo.hasNextPage ?? DEFAULT_HAS_NEXT}
        loader={<PostLoader />}
      >
        {posts?.map(post => (
          <PostCard post={post.node} key={post.node.id} />
        ))}
      </Styled.InfiniteScroll>
    </Styled.Content>
  )
}