import { DEFAULT_PAGE_SIZE } from '..';
import { POSTS_QUERY } from '../queries';

export const postsMock = [
  {
    request: {
      query: POSTS_QUERY,
      variables: {
        first: DEFAULT_PAGE_SIZE,
        order: 'VOTES'
      },
    },
    result: {
      data: {
        posts: {
          edges: [
            {
              cursor: 'MjE=',
              node: {
                id: '107187',
                name: 'Crello',
                tagline: 'Add animation to your content easily.',
                votesCount: 5398,
                thumbnail: {
                  url: 'https://ph-files.imgix.net/9a3b9526-2d66-4870-bb19-e7d1743ae0ba?auto=format\u0026fit=crop',
                  __typename: 'Media'
                },
                __typename: 'Post'
              },
              __typename: 'PostEdge'
            },
            {
              cursor: 'MjI=',
              node: {
                id: '108401',
                name: 'Sublime Text 3.0',
                tagline: 'The long awaited version 3 of the popular code editor',
                votesCount: 5352,
                thumbnail: {
                  url: 'https://ph-files.imgix.net/e40dc279-9ab3-4826-8e13-0c55931380d5?auto=format\u0026fit=crop',
                  __typename: 'Media'
                },
                __typename: 'Post'
              },
              __typename: 'PostEdge'
            }
          ],
          pageInfo: {
            hasNextPage: true,
            endCursor: 'MzA=',
            __typename: 'PageInfo'
          },
          __typename: 'PostConnection'
        }
      }
    }
  },
];