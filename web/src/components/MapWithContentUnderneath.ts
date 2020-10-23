import styled from 'styled-components';

import { colors } from '@/colors';

export const MapWrapper = styled.div`
  border: 1px solid ${colors.lines};
  border-radius: 20px;

  .leaflet-container {
    width: 100%;
    height: 400px;
    border-radius: 20px 20px 0 0;
  }
`;

export const MapContentUnderneath = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-align: center;
  color: ${colors.title1};
  border-radius: 0 0 20px 20px;
  background: ${colors.textInput};
`;
