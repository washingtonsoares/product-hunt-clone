import { useQuery } from '@apollo/client';
import * as Styled from './styled';
import Card from "../Card";
import { PostsResponse } from 'core/types/Post';
import PostLoader from '../Loader';
import { POSTS_QUERY } from './queries';

const DEFAULT_DATA_LENGTH = 0;
const DEFAULT_HAS_NEXT = true;
export const DEFAULT_PAGE_SIZE = 10;

interface Props {
  order: 'NEWEST' | 'VOTES'
}

export default function List({ order }: Props) {
  const { data, fetchMore } = useQuery<PostsResponse>(POSTS_QUERY, {
    variables: {
      first: DEFAULT_PAGE_SIZE,
      order
    }
  });

  const fetchMoreData = () => {
    fetchMore({
      variables: {
        cursor: data?.posts.pageInfo.endCursor
      }
    })
  }

  const posts = data?.posts?.edges;

  return (
    <Styled.ListWrapper>
      <Styled.InfiniteScroll
        dataLength={posts?.length ?? DEFAULT_DATA_LENGTH}
        next={fetchMoreData}
        hasMore={data?.posts.pageInfo.hasNextPage ?? DEFAULT_HAS_NEXT}
        loader={<PostLoader />}
      >
        {posts?.map(post => (
          <Card post={post.node} key={post.node.id} />
        ))}
      </Styled.InfiniteScroll>
    </Styled.ListWrapper>
  )
}