import React from 'react';

import Menu from '../Menu';

import styles from './index.module.scss';

export default function NavSocialLenguage() {
  return (
    <div className={styles.containerNav}>
      <Menu socialNav />
      <div className={styles.containerLenguages}>
        <button type="button" className={styles.buttonLenguage}>EN </button>
        <button type="button" className={styles.buttonLenguage}>ES</button>
      </div>
    </div>
  );
}
