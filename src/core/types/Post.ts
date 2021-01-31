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
  node: Post;
}

export interface PostsEdges {
  edges: PostNode[];
}

export interface PostResponse {
  posts: PostsEdges;
}
