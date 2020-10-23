import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

import { colors } from '@/colors';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

type InputProps = { validationState: 'neutral' | 'valid' | 'invalid' };

const inputStyle = css`
  width: 100%;
  height: 40px;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 14px;
  color: ${colors.text1};
  border: 1px solid
    ${({ validationState: vs }: InputProps) =>
      vs === 'neutral' ? colors.lines : vs === 'valid' ? '#a1e9c5' : '#e9a1a1'};
  background: ${colors.textInput};
`;

export const Input = styled.input`
  ${inputStyle}
`;

export const InputWithMask = styled(InputMask)`
  ${inputStyle}
`;

export const TextArea = styled(Input).attrs({ as: 'textarea' })`
  height: 120px;
  padding: 8px 12px;
  resize: none;
`;
