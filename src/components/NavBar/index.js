import React from 'react';

import Menu from './components/Menu';
import NavSocialNetworks from './components/NavSocialNetworks';
import NavMenu from './components/NavMenu';
import styles from './index.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavSocialNetworks />
      <NavMenu />
    </nav>
  );
}
