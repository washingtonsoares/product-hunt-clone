import { POST_DETAILS_QUERY } from '../queries';

export const postDetailsMock = [
  {
    request: {
      query: POST_DETAILS_QUERY,
      variables: { id: 1 }
    },
    result: {
      data: {
        post: {
          name: 'Startup Stash',
          votesCount: 20965,
          website: 'https://www.producthunt.com/r/106d336db2?utm_campaign=producthunt-api\u0026utm_medium=api-v2\u0026utm_source=Application%3A+Product+Hunt+Clone+%28ID%3A+41774%29',
          description: 'Fake description',
          media: [
            {
              url: 'https://ph-files.imgix.net/1289a739-2dd8-4dae-8747-f20291daf09f?auto=format\u0026fit=crop',
              __typename: 'Media'
            },
            {
              url: 'https://ph-files.imgix.net/099591ae-2278-4ec4-84ba-6a7b68cfb539?auto=format\u0026fit=crop',
              __typename: 'Media'
            },
            {
              url: 'https://ph-files.imgix.net/4bb79a58-baab-4434-af76-985ca67ed467?auto=format\u0026fit=crop',
              __typename: 'Media'
            }
          ],
          thumbnail: {
            url: 'https://ph-files.imgix.net/4bb79a58-baab-4434-af76-985ca67ed467?auto=format\u0026fit=crop',
            __typename: 'Media'
          },
          __typename: 'Post'
        }
      }
    }
  }
];
