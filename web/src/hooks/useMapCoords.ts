import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { DEFAULT_MAP_LATITUDE, DEFAULT_MAP_LONGITUDE } from '@/constants';

type Return = [
  { latitude: number; longitude: number; zoom: number },
  Dispatch<SetStateAction<{ latitude: number; longitude: number; zoom: number }>>
];

export function useMapCoords(): Return {
  const [coords, setCoords] = useState({
    latitude: DEFAULT_MAP_LATITUDE,
    longitude: DEFAULT_MAP_LONGITUDE,
    zoom: 5
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords({ latitude: coords.latitude, longitude: coords.longitude, zoom: 15 });
    });
  }, []);

  return [coords, setCoords];
}
