import React from 'react';

import Title from '../../components/Title';

import Subtitle from './components/Subtitle';
import Map from './components/Map';
import styles from './index.module.scss';

export default function DondeLlevar() {
  return (
    <section className={styles.dondeLlevar}>
      <Title Tag="h1" center text="¿DÓNDE LLEVO  MIS RESIDUOS?" />
      <Subtitle days="LUNES, MIERCOLES Y VIERNES: " wasteType="RECOLECCIÓN DE RESIDUOS ORGÁNICOS Y RECICLABLES " place="PLANTA DE RECICLAJE" backgroundColorPlace="lightblue" />
      <Subtitle days="MARTES Y JUEVES: " wasteType="RECOLECCIÓN DE RESIDUOS MIXTOS " place="BASURAL (FUTURO VERTEDERO CONTROLADO)" backgroundColorPlace="green" />
      <Map />
    </section>
   );
}

