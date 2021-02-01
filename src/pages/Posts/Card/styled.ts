import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const PostCard = styled(Link)`
  border-radius: 15px;
  background-color: #FFF;
  margin-bottom: 20px;
  padding: 10px 15px;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  border-radius: 15px;
`;

export const Info = styled.div`
  margin-left: 15px;
  width: 100%;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme }) => theme.ebonyGray};
  max-width: 80%;
`;

export const Tagline = styled.p`
  margin: 5px 0 0 0;
  color: ${({ theme }) => theme.regentGray};
  font-size: 13px;
  max-width: 80%;
`;

export const IconArrowUp = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

export const VotesCount = styled.strong``;

export const UpVote = styled.div`
  width: 65px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.ironGray};
  background-color: #FFF;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 12px;
`;
