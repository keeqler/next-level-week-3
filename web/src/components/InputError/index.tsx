import React, { FC } from 'react';
import { CSSProperties } from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

import * as s from './styles';

type Props = {
  message: string;
  style?: CSSProperties;
};

const InputError: FC<Props> = ({ message, style }: Props) => {
  return (
    <s.ErrorMessage style={style}>
      <FaExclamationTriangle size={14} style={{ marginRight: 4 }} /> {message}
    </s.ErrorMessage>
  );
};

export default InputError;
