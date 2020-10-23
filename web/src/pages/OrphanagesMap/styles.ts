import styled from 'styled-components';

import { colors } from '@/colors';
import { Button, ButtonLink } from '@/components/Button';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .sidebar {
    width: 30%;
    max-width: 380px;
    min-width: 220px;
    height: 100%;
    padding: 0 20px;
    display: flex;
    background: var(--brand-gradient);

    @media screen and (max-width: 800px) {
      width: 100%;
      max-width: unset;
      z-index: 500;
    }
  }
`;

export const SidebarContent = styled.div`
  max-width: 220px;
  margin: 0 auto;
  margin-top: 100px;

  @media screen and (max-width: 800px) {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
`;

export const Logo = styled.img`
  margin-bottom: 100px;
`;

export const UpperText = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 900;
  line-height: 42px;
  color: ${colors.text3};
`;

export const LowerText = styled.span`
  display: block;
  font-weight: 600;
  line-height: 24px;
  color: ${colors.text3};
`;

export const SeeMapButton = styled(Button)`
  display: none;

  :hover {
    color: ${colors.blue};
    background: #96feff;

    svg {
      color: ${colors.blue};
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 320px;
    height: 60px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;

  .leaflet-container {
    width: 100%;
    height: 100%;

    .map-popup {
      .leaflet-popup-content-wrapper {
        display: flex;
        box-shadow: none;
        border-radius: 28px;
        background: ${colors.mapMarkerPopup};
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

        .leaflet-popup-content {
          width: 260px;
          height: 50px;
          padding: 0 20px;
          margin: 0;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      .leaflet-popup-tip-container {
        display: none;
      }
    }
  }

  @media screen and (max-width: 800px) {
    display: ${({ showMap }: { showMap: boolean }) => (showMap ? 'block' : 'none')};
    position: absolute;
    z-index: 1;
  }
`;

export const MapPopupOrphanageName = styled.span`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
  color: ${colors.title1};
  font-weight: 800;
`;

export const MapPopupButton = styled(Link)`
  width: 40px;
  height: 40px;
  margin-left: 4px;
  display: flex;
  border-radius: 12px;
  background: ${colors.blue};

  svg {
    margin: auto;
    color: ${colors.text3};
  }
`;

export const AddOrphanageButton = styled(ButtonLink)`
  width: 280px;
  height: 60px;
  position: fixed;
  bottom: 60px;
  right: 60px;
  font-size: 22px;
  color: ${colors.text3};
  background: ${colors.blue};
  z-index: 400;

  svg {
    width: 28px;
    height: 28px;
    color: ${colors.text3};
  }

  :hover {
    color: #17d6eb;
    background: #96feff;

    svg {
      color: #17d6eb;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 280px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
