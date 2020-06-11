import React from 'react';
import { Map as MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';
import ReactDOMServer from 'react-dom/server';

import Title from '../../components/Title';

import styles from './index.module.scss';
import Search from './components/Search';


export default function DondeLlevar() {
  const position = [-34.6256097, -58.3808893, 21];
  const position2 = [-34, -58.3808893, 21];

  const markerIcon = (color = 'markerIcon') => L.divIcon({
      html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} className={styles[color]} />),
      iconSize: [41, 113],
      className: 'markerIcon'
   });

  return (
    <section className={styles.dondeLlevar}>
      <Title Tag="h1" center text="¿DÓNDE LLEVO  MIS RESIDUOS?" />
      <div className={styles.map}>
        <MapContainer className={styles.map} center={position} zoom={11} scrollWheelZoom={false}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Search markerIcon={markerIcon('red')} />

          <Marker position={position2} icon={markerIcon('green')} />
          <Marker position={position} icon={markerIcon('lightblue')} />
        </MapContainer>
      </div>
    </section>
   );
}

