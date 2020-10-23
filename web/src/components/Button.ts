import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '@/colors';

const style = css`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #8d734b;
  border-radius: 10px;
  background: ${colors.yellow};
  transition: 300ms color, 300ms background;
  cursor: pointer;

  svg {
    color: #8d734b;
    transition: 300ms all;
  }
`;

export const ButtonLink = styled(Link)`
  ${style}
`;

export const Button = styled.button`
  ${style}
`;
