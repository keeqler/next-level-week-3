import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import LogoWithName from '@/assets/logo-with-name.svg';
import Kids from '@/assets/kids.svg';

import * as s from './styles';

const Landing: FC = () => {
  return (
    <s.Wrapper>
      <s.Container>
        <s.IntroContainer>
          <s.Logo src={LogoWithName} alt="Logo with name" />

          <s.IntroMainContent>
            <s.IntroTitle>Leve felicidade para o mundo</s.IntroTitle>
            <s.IntroText>Visite orfanatos e mude o dia de muitas crianças.</s.IntroText>
            <s.AccessPlatformButton to="/app">
              Acessar a plataforma <FaArrowRight size={20} style={{ marginLeft: 8 }} />
            </s.AccessPlatformButton>
          </s.IntroMainContent>
        </s.IntroContainer>

        <s.KidsIllustrationContainer>
          <s.KidsIllustration src={Kids} alt="Kids" />
        </s.KidsIllustrationContainer>
      </s.Container>
    </s.Wrapper>
  );
};

export default Landing;
