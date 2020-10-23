import React, { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import logo from '@/assets/logo.svg';

import * as s from './styles';

const GoBackSidebar: FC = () => {
  return (
    <s.Container>
      <s.Logo src={logo} alt="Logo" />
      <s.GoBackButton to="/app">
        <FaArrowLeft color="#fff" />
      </s.GoBackButton>
    </s.Container>
  );
};

export default GoBackSidebar;
