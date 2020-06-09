import React from 'react';

import Title from '../../components/Title';

import sponsor1 from './assets/img/sponsor-1.png';
import sponsor2 from './assets/img/sponsor-2.png';
import styles from './index.module.scss';

export default function Sponsors() {
      return (
        <section>
          <Title Tag="h1" text="¡CONOCE A QUIENES NOS APOYAN!" center className={styles.title} />
          <div className={styles.sponsors}>
            <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div>
            <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div> <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div> <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div> <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div> <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div> <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div> <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div>
            <div className={styles.sponsor}>
              <div className={styles.logo}>
                <img src={sponsor1} className={styles.logoSponsor} />
              </div>
              <p className={styles.name}>Sponsor 1</p>
            </div>


          </div>
        </section>
      );
}
