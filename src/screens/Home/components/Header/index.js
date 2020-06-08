import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

import Title from '../../../../components/Title';

import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Title Tag="h1" className={styles.title} text="ECOcientes" />
          <Title Tag="h2" className={styles.subtitle} text="PROYECTO DE CONSIENTIZACIÓN" />
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
