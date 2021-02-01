import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = styled.header`
  display: flex;
  padding: 20px;
  background-color: #FFF;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const DateText = styled.span`
  background-color: ${({ theme }) => theme.porcelain};
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 14px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;
