import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Map as MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';


import styles from './index.module.scss';
import Search from './components/Search';
import TypeMarker from './components/TypeMarker';
import { MARKERS } from './constants/markers';

export default function Map() {
  const { latitud } = MARKERS[0];
  const { longitud } = MARKERS[0];
  const position = [latitud, longitud];

  const markerIcon = (color = 'markerIcon') => L.divIcon({
      html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} className={styles[color]} />),
      iconSize: [41, 113],
      className: 'markerIcon'
  });

  return (
    <div className={styles.map}>
      <MapContainer className={styles.map} center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Search markerIcon={markerIcon('red')} />

        <TypeMarker type="Tu ubicación" color="red" position="topright" />
        <TypeMarker type="Puntos verdes" color="green" position="topleft" />
        <TypeMarker type="Planta de reciclaje" color="lightblue" position="topleft" />

        {MARKERS.map(marker => <Marker key={marker.id} position={[marker.latitud, marker.longitud]} icon={markerIcon(marker.color)} />)}

      </MapContainer>
    </div>
  );
}
