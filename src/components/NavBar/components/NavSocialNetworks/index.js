import React from 'react';

import Menu from '../Menu';

import styles from './index.module.scss';

export default function NavSocialNetworks() {
  return (
    <div className={styles.containerNav}>
      <Menu socialNav />
    </div>
  );
}
