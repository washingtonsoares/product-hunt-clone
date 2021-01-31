import styled from 'styled-components';
import { ReactComponent as IconArrowUpComponent } from 'core/assets/icons/icon-arrow-up.svg';

export const PostCard = styled.div`
  border-radius: 15px;
  background-color: #FFF;
  margin-bottom: 20px;
  padding: 10px 15px;
  width: 85%;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
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

export const IconArrowUp = styled(IconArrowUpComponent)`
  width: 25px;
  height: 25px;
`;

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
