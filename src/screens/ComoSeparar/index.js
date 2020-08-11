import React from 'react';

import Title from 'components/Title';

import mixtosImg from './assets/img/mixtos.jpg';
import reciclableImg  from './assets/img/resiclable1.jpg';

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
       <div className={styles.containerWastes}>
         <div className={styles.waste}>
           <Title Tag="h3" text="LUNES, MIERCOLES Y VIERNES: RECICLABLES" backgroundColor="lightblue" className={styles.title} />
          <div className={styles.containerImg}>
            <img src={reciclableImg} alt="Imagen de residuos resiclable"/>
          </div>
         </div>
         <div className={styles.waste}>
           <Title Tag="h3" text="MARTES Y JUEVES: MIXTOS Y ORGANICOS" backgroundColor="orange" className={styles.title} />
           <div className={styles.containerImg}>
             <img  src={mixtosImg} alt="Imagen de residuos mixtos"/>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
}
