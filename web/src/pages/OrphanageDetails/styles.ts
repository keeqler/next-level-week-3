import styled, { StyledComponent } from 'styled-components';

import {
  MapWrapper as _MapWrapper,
  MapContentUnderneath
} from '@/components/MapWithContentUnderneath';
import { colors } from '@/colors';

export const OrphanageDetailsContainer = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 120px auto;
  border-radius: 10px;
  background: ${colors.background2};
`;

export const SelectedImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export const ImageOptionsContainer = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const ImageOption = styled.img`
  width: 96px;
  height: 96px;
  margin: 0 20px 20px 0;
  object-fit: cover;
  border: ${({ selected }: { selected: boolean }) => (selected ? '2px' : '0')} solid ${colors.blue};
  border-radius: 10px;
  opacity: ${({ selected }: { selected: boolean }) => (selected ? '0.4' : '1')};
  cursor: pointer;
`;

export const RemainingDetailsContainer = styled.div`
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
`;

export const OrphanageName = styled.h1`
  margin-bottom: 20px;
  font-size: 50px;
  color: ${colors.title2};
`;

export const Text = styled.span`
  font-size: 18px;
  color: ${colors.text1};
`;

export const MapWrapper = styled(_MapWrapper)`
  margin-top: 40px;
`;

export const ShowRoutesOnGoogleMapsButton = styled(MapContentUnderneath).attrs({ as: 'a' })`
  height: 52px;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  color: ${colors.title1};
  background: #e6f7fb;
` as StyledComponent<'a', any, { as: string }, 'as'>;

export const InstructionsTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 34px;
  color: ${colors.title2};
`;

export const CardsContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 326px;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  border-radius: 32px;
  border: 1px solid #000;
`;

export const OpenCloseTimeCard = styled(Card)`
  color: ${colors.text1};
  border-color: #b3dae2;
  background: linear-gradient(160deg, #e6f7fb 0%, ${colors.background2} 100%);
`;

export const OpenOnWeekendsCard = styled(Card)`
  color: ${colors.green};
  border-color: #a1e9c5;
  background: linear-gradient(160deg, #edfff6 0%, ${colors.background2} 100%);
`;

export const ClosedOnWeekendsCard = styled(Card)`
  color: ${colors.pink};
  border-color: #ffbcd4;
  background: linear-gradient(160deg, #fcf0f4 0%, ${colors.background2} 100%);
`;
