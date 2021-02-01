import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  padding: 25px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ActionIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  text-align: center;
`;

export const FeaturedImage = styled.img`
  border-radius: 15px;
  width: 100%;
  min-height: 200px;
`;

const baseCard = `
  background-color: #FFF;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
`;

export const Info = styled.div`
  ${baseCard}
`;

export const InfoHeader = styled.header`
  display: flex;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 20px;
`;

export const FeaturedName = styled.span`
  font-size: 22px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.regentGray};
`;

export const Footer = styled.footer`
  ${baseCard}
  display: flex;
`;

export const ActionButton = styled.button`
  background-color: #FFF;
  flex: 1;
  border: 2px solid ${({ theme }) => theme.ironGray};
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  font-size: 14px;

  &:first-child {
    margin-right: 30px;
  }
`;
