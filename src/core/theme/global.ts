import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.whiteSmoke};
  }

  a {
    text-decoration: none;
    color: #000;
  }

  #root {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyles;