import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  background-color: #FFF;
`;

export const TabItem = styled(NavLink)`
  font-size: 20px;
  padding: 10px 50px;
  display: inline-block;
  color: ${({ theme }) => theme.darkGrey};
  flex: 1;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
`;
