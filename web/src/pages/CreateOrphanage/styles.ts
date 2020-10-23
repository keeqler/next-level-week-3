import styled from 'styled-components';

import { MapWrapper as _MapWrapper } from '@/components/MapWithContentUnderneath';
import { colors } from '@/colors';

export const FormDescription = styled.span`
  margin: 60px auto;
  display: block;
  text-align: center;
  font-size: 16px;
  color: ${colors.text2};
`;

export const FormWrapper = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  background: ${colors.background2};

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const MapWrapper = styled(_MapWrapper)`
  margin-bottom: 40px;
`;

export const LoadingCircle = styled.img`
  animation: spin 1s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
