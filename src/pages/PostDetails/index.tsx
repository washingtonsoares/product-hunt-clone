import { faChevronLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PostResponse } from 'core/types/Post';
import { POST_DETAILS_QUERY } from './queries';
import * as Styled from './styled';
import PostDetailsLoader from './Loader';

interface Params {
  postId: string;
}

interface LocationState {
  previousPath: string;
}

export default function PostDetails() {
  const { postId } = useParams<Params>();
  const location = useLocation<LocationState>();
  const history = useHistory();
  const previousPath = location.state?.previousPath;

  const { data, loading } = useQuery<PostResponse>(POST_DETAILS_QUERY, {
    variables: {
      id: postId
    }
  });

  const handleGoBack = () => {
    if (previousPath) {
      history.push(previousPath);
    } else {
      history.push('/');
    }
  }

  const post = data?.post;

  const renderContent = () => (
    <>
      <Styled.Header>
        <Styled.ActionIcon
          icon={faChevronLeft}
          title="Go back"
          onClick={handleGoBack}
        />
        <Styled.ActionIcon title="Actions" icon={faEllipsisV} />
      </Styled.Header>
      <Styled.ImageWrapper>
        <Styled.FeaturedImage src={post?.media?.[0].url} alt={post?.name} />
      </Styled.ImageWrapper>
      <Styled.Info>
        <Styled.InfoHeader>
          <Styled.Thumbnail src={post?.thumbnail.url} />
          <Styled.FeaturedName>
            {post?.name}
          </Styled.FeaturedName>
        </Styled.InfoHeader>
        <Styled.Description>
          {post?.description}
        </Styled.Description>
      </Styled.Info>
      <Styled.Footer>
        <Styled.ActionButton
          as="a"
          href={post?.website}
          target="_blank"
        >
          Get it
        </Styled.ActionButton>
        <Styled.ActionButton>
          Upvote ({post?.votesCount})
        </Styled.ActionButton>
      </Styled.Footer>
    </>
  );

  return (
    <Styled.Wrapper>
      {loading ? <PostDetailsLoader /> : renderContent()}
    </Styled.Wrapper>
  );
}
