import React from 'react';

import Title from 'components/Title';
import Head from 'components/Head';

import Subtitle from './components/Subtitle';
import Map from './components/Map';
import styles from './index.module.scss';

export default function DondeLlevar() {
  return (
    <>
      <Head title="Dónde Llevar">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css" />
      </Head>
      <section className={styles.dondeLlevar}>
        <Title Tag="h1" center text="¿DÓNDE LLEVO  MIS RESIDUOS?" />
        <Subtitle days="LUNES, MIERCOLES Y VIERNES: " wasteType="RECOLECCIÓN DE RESIDUOS ORGÁNICOS Y RECICLABLES " place="PLANTA DE RECICLAJE" backgroundColorPlace="lightblue" />
        <Subtitle days="MARTES Y JUEVES: " wasteType="RECOLECCIÓN DE RESIDUOS MIXTOS " place="BASURAL (FUTURO VERTEDERO CONTROLADO)" backgroundColorPlace="green" />
        <Map />
      </section>
    </> 
  );
}

