import { createGlobalStyle } from 'styled-components';

import { colors } from '@/colors';

export const GlobalStyle = createGlobalStyle`
  :root {
    --brand-gradient: linear-gradient(
      330deg,
      ${colors.brandGradient[0]} 0%,
      ${colors.brandGradient[1]} 100%
    );
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    border: none;
    font-family: Nunito, sans-serif;
    background: none;
  }

  body {
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    color: ${colors.text1};
    background: ${colors.background1};
  }

  button, a {
    cursor: pointer;
  }
`;
