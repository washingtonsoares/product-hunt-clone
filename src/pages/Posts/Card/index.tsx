import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'core/types/Post';
import { useLocation } from 'react-router-dom';
import * as Styled from './styled';

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {
  const location = useLocation();

  return (
    <Styled.PostCard
      to={{
        pathname: `/post/${post.id}`,
        state: {
          previousPath: location.pathname
        }
      }}
    >
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
        <Styled.IconArrowUp icon={faCaretUp} />
        <Styled.VotesCount>{post.votesCount}</Styled.VotesCount>
      </Styled.UpVote>
    </Styled.PostCard>
  );
}
