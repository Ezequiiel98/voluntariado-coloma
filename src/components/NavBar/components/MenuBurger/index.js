import React from 'react';

import styles from './index.module.scss';

export default function MenuBurger({ showMenu, setShowMenu }) {
  return (
    <div className={styles.burgerMenu} onClick={() => setShowMenu(!showMenu)}>
      <span className={showMenu ? styles.burgerIconClose : styles.burgerIcon} />
      <span className={showMenu ? styles.burgerIconClose : styles.burgerIcon} />
      <span className={showMenu ? styles.burgerIconClose : styles.burgerIcon} />
    </div>
  );
}
