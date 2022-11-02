/* eslint-disable no-console */
import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT } from '../../consts';
import useMap from '../../hooks/useMap';
import { Point } from '../../types/point-type';

type MapProps = {
  points: Point[];
  city: Point;
}

function Map (props: MapProps):JSX.Element {
  const {points, city} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  console.log(points);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });
        marker
          .setIcon(new Icon({
            iconUrl: URL_MARKER_DEFAULT,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
          }))
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div style={{height: '500px'}} ref={mapRef}></div>
  );
}

export default Map;
