import React from 'react';

import NavSocialLenguage from './components/NavSocialLenguage';
import NavMenu from './components/NavMenu';
import styles from './index.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavSocialLenguage />
      <NavMenu />
    </nav>
  );
}
