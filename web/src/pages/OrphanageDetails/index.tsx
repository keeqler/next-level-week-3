import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import GoBackSidebar from '@/components/GoBackSidebar';
import { SeparatorLine } from '@/components/SeparatorLine';
import { api } from '@/services/api';
import { mapMarkerIcon } from '@/etc/mapMarkerIcon';
import { DEFAULT_MAP_LATITUDE, DEFAULT_MAP_LONGITUDE } from '@/constants';
import { colors } from '@/colors';

import * as s from './styles';
import { useMapCoords } from '@/hooks/useMapCoords';

type Image = {
  id: number;
  url: string;
};

type Orphanage = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  openingHours: string;
  openOnWeekends: boolean;
  images: Image[];
};

const OrphanageDetails: FC = () => {
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [imagesToSelectUrls, setImagesToSelectUrls] = useState<string[]>([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const { orphanageId } = useParams<{ orphanageId: string }>();
  const [mapCoords] = useMapCoords();
  const history = useHistory();

  let googleMapsRouteStartLocation = '';

  if (
    mapCoords.latitude !== DEFAULT_MAP_LATITUDE ||
    mapCoords.longitude !== DEFAULT_MAP_LONGITUDE
  ) {
    googleMapsRouteStartLocation = `${mapCoords.latitude},${mapCoords.longitude}`;
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`orphanages/${orphanageId}`);
        const orphanage: Orphanage = response.data;
        const imagesUrls: string[] = orphanage.images.map((image: Image) => image.url);

        setOrphanage(orphanage);

        if (imagesUrls.length) {
          setSelectedImageUrl(imagesUrls[0]);
          setImagesToSelectUrls(imagesUrls);
        }
      } catch {
        toast.error('Algo de errado aconteceu ao carregar dados do orfanato.');
        history.push('/app', { doNotShowIntro: true });
      }
    })();
  }, [history, orphanageId]);

  function handleImageOptionClick(clickedImageUrl: string) {
    setSelectedImageUrl(clickedImageUrl);
  }

  if (!orphanage) return <div />;

  return (
    <>
      <GoBackSidebar />
      <s.OrphanageDetailsContainer>
        {selectedImageUrl && <s.SelectedImage src={selectedImageUrl} alt="Selected image" />}
        {imagesToSelectUrls.length > 1 && (
          <s.ImageOptionsContainer>
            {imagesToSelectUrls.map(imageUrl => (
              <s.ImageOption
                key={Math.random()}
                src={imageUrl}
                alt="Image option"
                onClick={() => handleImageOptionClick(imageUrl)}
                selected={imageUrl === selectedImageUrl}
              />
            ))}
          </s.ImageOptionsContainer>
        )}
        <s.RemainingDetailsContainer>
          <s.OrphanageName>{orphanage.name}</s.OrphanageName>
          <s.Text>{orphanage.about}</s.Text>

          <s.MapWrapper>
            <Map center={[orphanage.latitude, orphanage.longitude]} zoom={15}>
              <TileLayer url={process.env.REACT_APP_TILE_LAYER_URL as string} />

              <Marker
                interactive={false}
                icon={mapMarkerIcon}
                position={[orphanage.latitude, orphanage.longitude]}
              />
            </Map>
            <s.ShowRoutesOnGoogleMapsButton
              href={`https://www.google.com/maps/dir/${googleMapsRouteStartLocation}/${orphanage.latitude},${orphanage.longitude}/@${orphanage.latitude},${orphanage.longitude},15z`}
              target="_blank"
            >
              Ver rotas no Google Maps
            </s.ShowRoutesOnGoogleMapsButton>
          </s.MapWrapper>

          <SeparatorLine />

          <s.InstructionsTitle>Instruções para visita</s.InstructionsTitle>
          <s.Text>{orphanage.instructions}</s.Text>

          <s.CardsContainer>
            <s.OpenCloseTimeCard>
              <FiClock size={50} color={colors.blue} />
              <div>
                <span>Horário de visitas</span>
                <br />
                <span>{orphanage.openingHours}</span>
              </div>
            </s.OpenCloseTimeCard>
            {orphanage.openOnWeekends && (
              <s.OpenOnWeekendsCard>
                <AiOutlineInfoCircle size={50} color={colors.green} />
                <div>
                  <span>Atendemos</span>
                  <br />
                  <span>Fim de semana</span>
                </div>
              </s.OpenOnWeekendsCard>
            )}
            {!orphanage.openOnWeekends && (
              <s.ClosedOnWeekendsCard>
                <AiOutlineInfoCircle size={50} color={colors.pink} />
                <div>
                  <span>Não atendemos</span>
                  <br />
                  <span>fim de semana</span>
                </div>
              </s.ClosedOnWeekendsCard>
            )}
          </s.CardsContainer>
        </s.RemainingDetailsContainer>
      </s.OrphanageDetailsContainer>
    </>
  );
};

export default OrphanageDetails;
