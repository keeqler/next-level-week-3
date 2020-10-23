import styled from 'styled-components';

import { colors } from '@/colors';
import { SeparatorLine as _SeparatorLine } from '@/components/SeparatorLine';

export const Description = styled.h1`
  color: ${colors.title2};
  margin-bottom: 4px;
`;

export const SeparatorLine = styled(_SeparatorLine)`
  margin-top: 0;
  margin-bottom: 40px;
`;
