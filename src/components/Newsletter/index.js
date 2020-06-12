import React from 'react';

import Title from '../Title';

import styles from './index.module.scss';

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <Title Tag="h2" text="¡NO TE PIERDAS TIPS E IDEAS PARA SER MAS ECONSIENTE!" />
      <form className={styles.containerForm}>
        <input type="email" required placeholder="dejá@tu.mail" className={styles.input} />
        <button type="submit" className={styles.button}> + ME SUMO</button>
      </form>
      <p className={styles.place}>Miramar, Córdoba, Argentina.</p>
    </div>
  );
}
