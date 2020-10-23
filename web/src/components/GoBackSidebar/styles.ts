import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 72px;
  height: 100vh;
  max-height: 680px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom-right-radius: 16px;
  background: var(--brand-gradient);
  z-index: 10000;

  @media screen and (max-width: 1000px) {
    width: 70px;
    height: 70px;
    max-height: unset;
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 50px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const GoBackButton = styled(Link)`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #12afcb;
  transition: 300ms background;

  :hover {
    background: #17d6eb;
  }

  @media screen and (max-width: 1000px) {
    margin: auto;
    background: none;

    :hover {
      background: none;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
