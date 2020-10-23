import 'leaflet/dist/leaflet.css';

import React, { FC, useEffect, useState } from 'react';
import { BiPlus, FaArrowRight, FaMapMarked } from 'react-icons/all';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { AnimatePresence, motion } from 'framer-motion';
import { RouteChildrenProps } from 'react-router';
import { toast } from 'react-toastify';
import leaflet from 'leaflet';
import * as _ from 'lodash';

import logo from '@/assets/logo.svg';
import { api } from '@/services/api';
import { useMapCoords } from '@/hooks/useMapCoords';

import * as s from './styles';

type Props = RouteChildrenProps<null, { doNotShowIntro?: boolean }>;
type Orphanage = { id: number; name: string; latitude: number; longitude: number };

const mapIcon = leaflet.icon({
  iconUrl: logo,
  iconSize: [48, 58],
  iconAnchor: [24, 58],
  popupAnchor: [160, 6]
});

const OrphanagesMap: FC<Props> = ({ location }: Props) => {
  const [showMap, setShowMap] = useState(location.state?.doNotShowIntro || false); // This is for mobile only
  const [orphanages, setOrphanages] = useState<Orphanage[]>();
  const [mapCoords, setMapCoords] = useMapCoords();

  const viewWidthUnder800 = window.innerWidth <= 800;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('orphanages');

        setOrphanages(
          response.data.map((orphanage: Record<string, string | number>) =>
            _.pick(orphanage, ['id', 'name', 'latitude', 'longitude'])
          )
        );
      } catch {
        toast.error('Erro ao carregar dados dos orfanatos.');
      }
    })();
  }, []);

  return (
    <s.Container>
      <AnimatePresence>
        {(!viewWidthUnder800 || !showMap) && (
          <motion.aside
            transition={{ duration: 0.3, ease: 'circIn' }}
            animate={{ transform: 'translateX(0)' }}
            exit={{ transform: 'translateX(-100%)' }}
            className="sidebar"
          >
            <s.SidebarContent>
              <s.Logo src={logo} alt="Logo" />
              <s.UpperText>Escolha um orfanato no mapa</s.UpperText>
              <s.LowerText>Muitas crianças estão esperando a sua visita :)</s.LowerText>

              <s.SeeMapButton onClick={() => setShowMap(true)}>
                <FaMapMarked size={24} style={{ marginRight: 8 }} />
                Ver mapa
              </s.SeeMapButton>
            </s.SidebarContent>
          </motion.aside>
        )}
      </AnimatePresence>

      {(!viewWidthUnder800 || showMap) && (
        <>
          <s.MapWrapper showMap={showMap}>
            <Map center={[mapCoords.latitude, mapCoords.longitude]} zoom={mapCoords.zoom}>
              <TileLayer url={process.env.REACT_APP_TILE_LAYER_URL as string} />

              {orphanages &&
                orphanages.map(orphanage => (
                  <Marker
                    key={orphanage.id}
                    icon={mapIcon}
                    position={[orphanage.latitude, orphanage.longitude]}
                    onclick={() =>
                      setMapCoords({
                        latitude: orphanage.latitude,
                        longitude: orphanage.longitude,
                        zoom: 20
                      })
                    }
                  >
                    <Popup closeButton={false} className="map-popup">
                      <s.MapPopupOrphanageName>{orphanage.name}</s.MapPopupOrphanageName>
                      <s.MapPopupButton to={`/orphanages/${orphanage.id}`}>
                        <FaArrowRight size={16} />
                      </s.MapPopupButton>
                    </Popup>
                  </Marker>
                ))}
            </Map>
          </s.MapWrapper>

          <s.AddOrphanageButton to="/orphanages/create">
            <BiPlus size={24} style={{ marginRight: 8 }} />
            Adicionar orfanato
          </s.AddOrphanageButton>
        </>
      )}
    </s.Container>
  );
};

export default OrphanagesMap;
