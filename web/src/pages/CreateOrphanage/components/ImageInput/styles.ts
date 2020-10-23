import { colors } from '@/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddImageButton = styled.label`
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #96d2f0;
  border-radius: 10px;
  background: ${colors.textInput};
  cursor: pointer;

  svg {
    pointer-events: none;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  position: relative;
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DeleteImageButton = styled.button.attrs({ type: 'button' })`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 10px;
  background: ${colors.background2};
  cursor: pointer;
`;
