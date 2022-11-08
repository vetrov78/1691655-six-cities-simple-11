/* eslint-disable no-console */
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types/offer-type';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: Location): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRefRendered = useRef<boolean>(false);

  useEffect(
    () => {
      // eslint-disable-next-line no-console
      console.log(`city changed: ${city.latitude}`);

      isRefRendered.current = false;

      if (mapRef.current !== null && !isRefRendered.current) {

        const instance = new Map(mapRef.current, {
          center: {
            lat: city.latitude,
            lng: city.longitude,
          },
          zoom: city.zoom
        });

        const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          });

        isRefRendered.current = true;

        instance.addLayer(layer);
        setMap(instance);
      }
    }, [mapRef, city]);

  return map;
}

export default useMap;
