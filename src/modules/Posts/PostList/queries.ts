import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query GetPosts($first: Int!, $order: PostsOrder) {
    posts (first: $first, order: $order) {
      edges {
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
    }
  }
`;