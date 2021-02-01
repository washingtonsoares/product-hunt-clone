export interface Post {
  id: string;
  name: string;
  tagline: string;
  thumbnail: Thumbnail;
  votesCount: number;
  description: string;
  website: string;
  media: Media[];
}

export interface Media {
  url: string;
}

export interface Thumbnail {
  url: string;
}

export interface PostNode {
  cursor: string;
  node: Post;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

export interface PostsData {
  edges: PostNode[];
  pageInfo: PageInfo;
}

export interface PostResponse {
  post: Post;
}

export interface PostsResponse {
  posts: PostsData;
}

export interface PostsVariables {
  first?: number;
  order?: string;
  cursor?: string;
}