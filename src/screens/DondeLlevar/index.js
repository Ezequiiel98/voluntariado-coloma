import React from 'react';
import { Map as MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import Title from '../../components/Title';

import { markerIcon } from './components/markerIcon';
import styles from './index.module.scss';
import Geosearch from './search.js';


export default function DondeLlevar() {
 const position = [-34.6256097, -58.3808893, 21];
 const position2 = [-34, -58.3808893, 21];

return (
  <section className={styles.dondeLlevar}>
    <Title Tag="h1" center text="¿DÓNDE LLEVO  MIS RESIDUOS?" />
    <div className={styles.map}>
      <MapContainer className={styles.map} center={position}    zoom={18} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
	<Geosearch /> 

        <Marker position={position2} icon={markerIcon('green')} />
        <Marker position={position} icon={markerIcon('lightblue')} />
      </MapContainer>
    </div>
  </section>
 );
}

