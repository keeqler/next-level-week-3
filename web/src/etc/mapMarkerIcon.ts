import leaflet from 'leaflet';

import logo from '@/assets/logo.svg';

export const mapMarkerIcon = leaflet.icon({
  iconUrl: logo,
  iconSize: [48, 58],
  iconAnchor: [24, 58],
  popupAnchor: [160, 6]
});
