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
  const { latitude, longitude } = MARKERS[8];
  const position = [latitude, longitude];

  const markerIcon = (color = 'markerIcon') => L.divIcon({
      html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} className={styles[color]} />),
      iconSize: [41, 113],
      className: 'markerIcon'
  });

  return (
    <div className={styles.map}>
      <MapContainer className={styles.map} center={position} zoom={14.49} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Search markerIcon={markerIcon('red')} />

        <TypeMarker type="Tu ubicación" color="red" position="topright" />
        <TypeMarker type="Puntos verdes" color="green" position="topleft" />
        <TypeMarker type="Planta de reciclaje" color="lightblue" position="topleft" />

        {MARKERS.map(({id, latitude, longitude, color}) => <Marker key={id} position={[latitude, longitude]} icon={markerIcon(color)} />)}

      </MapContainer>
    </div>
  );
}
