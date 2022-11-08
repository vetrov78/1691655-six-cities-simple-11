import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import useMap from '../../hooks/useMap';
import { Location, Offer } from '../../types/offer-type';

type MapProps = {
  offers: Offer[];
  city: Location;
  selectedPoint: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map (props: MapProps):JSX.Element {
  const {offers, city, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== undefined
              && selectedPoint.location.latitude === offer.location.latitude
              && selectedPoint.location.longitude === offer.location.longitude ?
              currentCustomIcon :
              defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <div style={{height: '500px'}} ref={mapRef}></div>
  );
}

export default Map;
