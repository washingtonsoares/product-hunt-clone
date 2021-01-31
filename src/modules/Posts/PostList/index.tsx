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
        dataLength={posts?.length ?? 0}
        next={fetchMoreData}
        hasMore={true}
        loader={<PostLoader />}
      >
        {posts?.map(post => (
          <PostCard post={post.node} key={post.node.id} />
        ))}
      </Styled.InfiniteScroll>
    </Styled.Content>
  )
}