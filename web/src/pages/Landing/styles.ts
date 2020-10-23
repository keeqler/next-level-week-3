import styled from 'styled-components';

import { ButtonLink } from '@/components/Button';
import { colors } from '@/colors';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: var(--brand-gradient);
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
`;

export const IntroContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    max-height: 600px;
    margin: auto;
  }
`;

export const Logo = styled.img`
  align-self: flex-start;

  @media screen and (max-width: 660px) {
    align-self: center;
  }
`;

export const IntroMainContent = styled.div`
  max-width: 360px;

  @media screen and (max-width: 660px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;

export const IntroTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 76px;
  font-weight: 900;
  line-height: 78px;
  color: ${colors.text3};

  @media screen and (max-width: 768px) {
    line-height: 60px;
    font-size: 60px;
  }

  @media screen and (max-width: 660px) {
    font-size: 50px;
    line-height: 50px;
    text-align: center;
  }
`;

export const IntroText = styled.span`
  font-size: 24px;
  color: ${colors.text3};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 660px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const AccessPlatformButton = styled(ButtonLink)`
  width: 100%;
  max-width: 320px;
  height: 68px;
  margin-top: 40px;

  :hover {
    color: ${colors.blue};
    background: #96feff;

    svg {
      color: ${colors.blue};
    }
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    font-size: 20px;
  }
`;

export const KidsIllustrationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 660px) {
    display: none;
  }
`;

export const KidsIllustration = styled.img`
  width: 100%;
  max-width: 600px;
  max-height: 100%;
  align-self: end;
  margin: auto 0;
`;
