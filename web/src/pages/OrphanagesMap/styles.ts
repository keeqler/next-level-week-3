import styled from 'styled-components';

import { colors } from '@/colors';
import { ButtonWithIcon, ButtonWithIconLink } from '@/components/ButtonWithIcon';

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
    background: linear-gradient(
      330deg,
      ${colors.brandGradient[0]} 0%,
      ${colors.brandGradient[1]} 100%
    );

    @media screen and (max-width: 800px) {
      width: 100%;
      max-width: unset;
      z-index: 2;
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

export const SeeMapButton = styled(ButtonWithIcon)`
  display: none;

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

export const MapContainer = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 800px) {
    display: ${({ showMap }: { showMap: boolean }) => (showMap ? 'block' : 'none')};
    position: absolute;
    z-index: 1;
  }
`;

export const AddOrphanageButton = styled(ButtonWithIconLink)`
  width: 280px;
  height: 60px;
  position: absolute;
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

    svg {
      color: #17d6eb;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 280px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
