import styled from 'styled-components';

import { colors } from '@/colors';

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

type ButtonProps = { selected: boolean };

const Button = styled.button.attrs({ type: 'button' })`
  width: 50%;
  height: 40px;
  margin-top: 6px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: 1px solid ${colors.lines};
  transition: opacity 300ms;

  :hover {
    opacity: 0.6;
  }
`;

export const YesButton = styled(Button)`
  border-radius: 14px 0 0 14px;
  color: ${({ selected }: ButtonProps) => (selected ? colors.green : colors.text1)};
  background: ${({ selected }: ButtonProps) => (selected ? colors.lightGreen : colors.yesNoButton)};
`;

export const NoButton = styled(Button)`
  border-left: 0;
  border-radius: 0 14px 14px 0;
  color: ${({ selected }: ButtonProps) => (selected ? colors.pink : colors.text1)};
  background: ${({ selected }: ButtonProps) => (selected ? colors.lightPink : colors.yesNoButton)};
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
`;
