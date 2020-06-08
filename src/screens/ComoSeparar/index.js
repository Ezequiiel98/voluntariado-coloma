import React from 'react';


import Header from './components/Header';
import WasteType from './components/WasteType';
import { WASTE_TYPES } from './constants/wasteTypes';
import styles from './index.module.scss';

export default function ComoSeparar() {
 return (
   <section className={styles.comoSeparar}>
     <Header />
     { WASTE_TYPES.map(type => <WasteType key={type.id} {...type} />) }
   </section>
 );
}
