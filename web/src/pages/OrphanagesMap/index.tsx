import React, { FC, useState } from 'react';
import { BiPlus, FaMapMarked } from 'react-icons/all';
import { Map, TileLayer } from 'react-leaflet';
import { AnimatePresence, motion } from 'framer-motion';

import 'leaflet/dist/leaflet.css';

import Logo from '@/assets/logo.svg';

import * as s from './styles';

const OrphanagesMap: FC = () => {
  // This is for mobile only
  const [showMap, setShowMap] = useState(false);
  const viewWidthUnder800 = window.innerWidth <= 800;

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
              <s.Logo src={Logo} alt="Logo" />
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
        <s.MapContainer showMap={showMap}>
          <Map
            center={[-8.2018558, -35.5662467]}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url={`http://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
          </Map>

          <s.AddOrphanageButton to="">
            <BiPlus size={24} style={{ marginRight: 8 }} />
            Adicionar orfanato
          </s.AddOrphanageButton>
        </s.MapContainer>
      )}
    </s.Container>
  );
};

export default OrphanagesMap;
