import React from 'react';

import Title from '../../components/Title';

import { SPONSORS } from './constants/sponsors';
import Sponsor from './components/Sponsor';
import styles from './index.module.scss';

export default function Sponsors() {
      return (
        <section>
          <Title Tag="h1" text="¡CONOCE A QUIENES NOS APOYAN!" center className={styles.title} />
          <div className={styles.sponsors}>
            {SPONSORS.map(sponsor => <Sponsor key={sponsor.id} {...sponsor} />)}
          </div>
        </section>
      );
}
