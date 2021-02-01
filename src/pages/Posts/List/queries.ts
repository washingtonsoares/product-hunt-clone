import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query getPosts($cursor: String, $first: Int!, $order: PostsOrder) {
    posts (after: $cursor, first: $first, order: $order) {
      edges {
        cursor
        node {
          id
          name
          tagline
          votesCount
          thumbnail {
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
