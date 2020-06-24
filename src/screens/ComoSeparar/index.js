import React from 'react';

import Title from '../../components/Title';

import Header from './components/Header';
import WasteType from './components/WasteType';
import { WASTE_TYPES } from './constants/wasteTypes';
import styles from './index.module.scss';

export default function ComoSeparar() {
 return (
   <section className={styles.comoSeparar}>
     <Header />
     { WASTE_TYPES.map(type => <WasteType key={type.id} {...type} />) }

     <div className={styles.days}>
       <Title Tag="h2" text="¿QUÉ DÍA RECOLECTAN CADA RESIDUO?" center />
       <div className={styles.container}>
         <Title Tag="h3" text="LUNES, MIERCOLES Y VIERNES: RECICLABLES" backgroundColor="lightblue" className={styles.title} />
         <Title Tag="h3" text="MARTES Y JUEVES: MIXTOS Y ORGANICOS" backgroundColor="orange" className={styles.title} />
       </div>

     </div>
   </section>
 );
}
