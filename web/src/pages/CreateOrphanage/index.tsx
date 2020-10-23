import 'leaflet/dist/leaflet.css';

import React, { FC, useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import loadingCircle from '@/assets/loading.svg';
import Form from '@/components/Form';
import TextInput from '@/components/TextInput';
import GoBackSidebar from '@/components/GoBackSidebar';
import { MapContentUnderneath } from '@/components/MapWithContentUnderneath';
import { api } from '@/services/api';
import { useMapCoords } from '@/hooks/useMapCoords';
import { mapMarkerIcon } from '@/etc/mapMarkerIcon';

import YesNoSelector from './components/YesNoSelector';
import FormSectionDescription from './components/FormSectionDescription';
import SubmitButton from './components/SubmitButton';
import ImageInput from './components/ImageInput';
import * as s from './styles';

type SelectedMapPositionState = { latitude: number; longitude: number } | null;
type Inputs = {
  name: string;
  about: string;
  instructions: string;
  openingHours: string;
  openOnWeekends: boolean;
};

const schema = yup.object().shape<Inputs>({
  name: yup.string().max(30, 'Máximo de 30 caracteres').required('Este campo deve ser preenchido'),
  about: yup
    .string()
    .max(300, 'Máximo de 300 caracteres')
    .required('Este campo deve ser preenchido'),
  instructions: yup
    .string()
    .max(300, 'Máximo de 300 caracteres')
    .required('Este campo deve ser preenchido'),
  openingHours: yup
    .string()
    .max(50, 'Máximo de 50 caracteres')
    .required('Este campo deve ser preenchido'),
  openOnWeekends: yup.boolean()
});

const CreateOrphanage: FC = () => {
  const [selectedMapPosition, setSelectedMapPosition] = useState<SelectedMapPositionState>();
  const [imagesToUpload, setImagesToUpload] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [mapCoords] = useMapCoords();
  const history = useHistory();

  async function handleSubmit(inputs: Inputs) {
    if (!selectedMapPosition) {
      return toast.error('Selecione a localização do orfanato no mapa');
    }

    const formData = new FormData();

    // Append all image files to form data
    imagesToUpload.forEach(file => formData.append('images', file));

    formData.append('name', inputs.name);
    formData.append('latitude', selectedMapPosition.latitude.toString());
    formData.append('longitude', selectedMapPosition.longitude.toString());
    formData.append('about', inputs.about);
    formData.append('instructions', inputs.instructions);
    formData.append('openingHours', inputs.openingHours);
    formData.append('openOnWeekends', inputs.openOnWeekends ? '1' : '0');

    setLoading(true);

    try {
      await api.post('orphanages', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Orfanato adicionado com sucesso!');
      history.push('/app', { doNotShowIntro: true });
    } catch {
      toast.error('Algo de errado aconteceu.');
    }

    setLoading(false);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setSelectedMapPosition({ latitude: lat, longitude: lng });
  }

  return (
    <>
      <GoBackSidebar />

      <s.FormDescription>Adicione um orfanato</s.FormDescription>

      <s.FormWrapper>
        <Form onSubmit={handleSubmit} schema={schema}>
          <FormSectionDescription description="Dados" />

          <s.MapWrapper>
            <Map
              center={[mapCoords.latitude, mapCoords.longitude]}
              zoom={mapCoords.zoom}
              onClick={handleMapClick}
            >
              <TileLayer url={process.env.REACT_APP_TILE_LAYER_URL as string} />

              {selectedMapPosition && (
                <Marker
                  interactive={false}
                  icon={mapMarkerIcon}
                  position={[selectedMapPosition.latitude, selectedMapPosition.longitude]}
                />
              )}
            </Map>
            <MapContentUnderneath>Clique no mapa para adicionar a localização</MapContentUnderneath>
          </s.MapWrapper>

          <TextInput name="name" label="Nome" />
          <TextInput name="about" label="Sobre" isTextArea />
          <ImageInput
            images={imagesToUpload}
            setImages={setImagesToUpload}
            style={{ marginBottom: 60 }}
          />

          <FormSectionDescription description="Visitação" />

          <TextInput name="instructions" label="Instruções" isTextArea />
          <TextInput name="openingHours" label="Horário das visitas" />
          <YesNoSelector name="openOnWeekends" label="Atende em fins de semana?" />

          <SubmitButton>
            {loading && <s.LoadingCircle src={loadingCircle} alt="Loading" />}
            {!loading && 'Confirmar'}
          </SubmitButton>
        </Form>
      </s.FormWrapper>
    </>
  );
};

export default CreateOrphanage;
