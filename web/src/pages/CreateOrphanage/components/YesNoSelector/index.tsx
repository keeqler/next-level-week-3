import { InputLabel } from '@/components/InputLabel';
import React, { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CSSProperties, StyledComponentProps } from 'styled-components';

import * as s from './styles';

type Props = StyledComponentProps<'input', any, { type: 'checkbox' }, 'type'> & {
  name: string;
  label: string;
  isTextArea?: boolean;
  style?: CSSProperties;
};

const Checkbox: FC<Props> = ({ name, label, style, ...props }: Props) => {
  const { register } = useFormContext();
  const [checked, setChecked] = useState(false);

  return (
    <div style={style}>
      <InputLabel>{label}</InputLabel>
      <s.ButtonsContainer>
        <s.YesButton selected={checked} onClick={() => setChecked(true)}>
          Sim
        </s.YesButton>
        <s.NoButton selected={!checked} onClick={() => setChecked(false)}>
          Não
        </s.NoButton>
      </s.ButtonsContainer>
      <s.HiddenCheckbox
        checked={checked}
        onChange={() => null}
        name={name}
        ref={register()}
        {...props}
      />
    </div>
  );
};

export default Checkbox;
