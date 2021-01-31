import { Post } from 'core/types/Post';
import * as Styled from './styled';

interface Props {
  post: Post;
}

function PostCard({ post }: Props) {
  return (
    <Styled.PostCard>
      <Styled.Image
        src={post.thumbnail.url}
        alt={post.name}
        width="60px"
        height="60px"
      />
      <Styled.Info>
        <Styled.Name>
          {post.name}
        </Styled.Name>
        <Styled.Tagline>
          {post.tagline}
        </Styled.Tagline>
      </Styled.Info>
      <Styled.UpVote>
        <Styled.IconArrowUp />
        {post.votesCount}
      </Styled.UpVote>
    </Styled.PostCard>
  );
}

export default PostCard;