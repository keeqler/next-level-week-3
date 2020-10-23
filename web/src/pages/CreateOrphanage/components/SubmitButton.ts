import styled from 'styled-components';

import { Button } from '@/components/Button';
import { colors } from '@/colors';

export default styled(Button)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 16px;
  color: ${colors.text3};
  background: ${colors.green};
  transition: opacity 300ms;

  :hover {
    opacity: 0.8;
  }

  :disabled {
    filter: saturate(0%);
    cursor: not-allowed;

    :hover {
      opacity: 1;
    }
  }
`;
