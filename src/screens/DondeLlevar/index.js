import React from 'react';

import Title from '../../components/Title';

import Map from './components/Map';
import styles from './index.module.scss';

export default function DondeLlevar() {

  return (
    <section className={styles.dondeLlevar}>
      <Title Tag="h1" center text="¿DÓNDE LLEVO  MIS RESIDUOS?" />
      <Map />
    </section>
   );
}

