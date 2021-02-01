import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PostCard = styled.div`
  border-radius: 15px;
  background-color: #FFF;
  margin-bottom: 20px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  position: relative;
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
  color: #232c37;
  max-width: 80%;
`;

export const Tagline = styled.p`
  margin: 5px 0 0 0;
  color: #85949b;
  font-size: 13px;
  max-width: 80%;
`;

export const IconArrowUp = styled(FontAwesomeIcon)`
   font-size: 30px;
`;

export const VotesCount = styled.strong``;

export const UpVote = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border: 1px solid #e4e5e6;
  background-color: #FFF;
  border-radius: 15px;
  right: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 12px;
`;
