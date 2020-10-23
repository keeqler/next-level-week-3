import React, { ChangeEvent, CSSProperties, Dispatch, FC, SetStateAction } from 'react';

import { InputLabel } from '@/components/InputLabel';

import * as s from './styles';
import { BiPlus } from 'react-icons/bi';
import { colors } from '@/colors';
import { toast } from 'react-toastify';
import { CgClose } from 'react-icons/cg';

type Props = {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
  style?: CSSProperties;
};

const ImageInput: FC<Props> = ({ images, setImages, style }: Props) => {
  function addImages(selectedFiles: FileList) {
    const selectedFilesArray = Array.from(selectedFiles);
    const joinedImages = [...images, ...selectedFilesArray];

    if (joinedImages.length > 5) {
      return toast.error('É permitido enviar no máximo 5 imagens');
    }

    if (selectedFilesArray.find(file => file.type.split('/')[0] !== 'image')) {
      return toast.error('É permitido enviar apenas imagens');
    }

    if (selectedFilesArray.find(file => file.size > 2 * 1024 * 1024)) {
      return toast.error('O tamanho de cada imagem não pode ultrapassar 2MB');
    }

    setImages(joinedImages);
  }

  function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files;

    if (!(selectedFiles instanceof FileList)) {
      return;
    }

    addImages(selectedFiles);
  }

  function handleDeleteImageButtonClick(imageToDelete: File) {
    setImages(
      images.filter(
        filterImage =>
          !(filterImage.name === imageToDelete.name && filterImage.size === imageToDelete.size)
      )
    );
  }

  return (
    <s.Container style={style}>
      <InputLabel>Fotos</InputLabel>
      <s.ImagesContainer>
        {images.map(image => (
          <s.ImageWrapper key={`${Math.random()}`}>
            <s.DeleteImageButton onClick={() => handleDeleteImageButtonClick(image)}>
              <CgClose size={20} color={colors.pink} />
            </s.DeleteImageButton>
            <s.Image alt="Foto" src={URL.createObjectURL(image)} />
          </s.ImageWrapper>
        ))}

        {images.length < 5 && (
          <s.AddImageButton
            htmlFor="image-input"
            onDragOver={event => {
              event.stopPropagation();
              event.preventDefault();
            }}
            onDragEnter={event => {
              event.stopPropagation();
              event.preventDefault();
            }}
            onDragLeave={event => {
              event.stopPropagation();
              event.preventDefault();
            }}
            onDrop={event => {
              event.stopPropagation();
              event.preventDefault();
              addImages(event.dataTransfer.files);
            }}
          >
            <BiPlus size={26} color={colors.blue} />
          </s.AddImageButton>
        )}
      </s.ImagesContainer>

      <input
        id="image-input"
        type="file"
        accept="image/*"
        onChange={handleFileSelection}
        style={{ display: 'none' }}
        multiple
      />
    </s.Container>
  );
};

export default ImageInput;
