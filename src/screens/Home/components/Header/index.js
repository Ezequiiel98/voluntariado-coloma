import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

import Head from 'components/Head';
import Title from 'components/Title';

import logo from './assets/img/logo.jpeg';
import styles from './index.module.scss';

export default function Header() {
  return (
    <>
      <Head title="Home" />
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.containerTitle}>
            <div className={styles.containerImg} >
              <img className={styles.logoImg} src={logo} alt="Logo de Econsientes" />
            </div>
            <Title Tag="h2" className={styles.subtitle} text="PROYECTO DE CONCIENTIZACIÓN AMBIENTAL" />
          </div>
          <a href="#main" className={styles.buttonArrow}>
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon1} />
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon2} />
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon3} />
          </a>
        </div>
      </header>
    </>
  );
}
