export interface Post {
  id: string;
  name: string;
  tagline: string;
  thumbnail: Thumbnail;
  votesCount: number;
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
  posts: PostsData;
}

export interface PostsVariables {
  first?: number;
  order?: string;
  cursor?: string;
}