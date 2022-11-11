import { Icon, LayerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { Location, Offer } from '../../types/offer-type';

type MapProps = {
  offers: Offer[];
  city: Location;
  selectedPoint: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map (props: MapProps):JSX.Element {
  const {offers, city, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markersLayer = new LayerGroup();

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
          .addTo(markersLayer);
      });

      map.addLayer(markersLayer);
    }
  }, [map, offers, selectedPoint]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

export default Map;
