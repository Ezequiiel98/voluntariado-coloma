import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>ECOcientes</h1>
          <h2 className={styles.subtitle}>PROYECTO DE CONSIENTIZACIÓN AMBIENTAL</h2>
        </div>
        <a href="#main" className={styles.buttonArrow}>
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon1} />
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon2} />
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon3} />
        </a>
      </div>
    </header>
  );
}
