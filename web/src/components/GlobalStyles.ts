import { createGlobalStyle } from 'styled-components';

import { colors } from '@/colors';

export const GlobalStyle = createGlobalStyle`
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
    background: ${colors.background};
  }
`;
