import React, { useState, useEffect } from 'react';

import Menu from '../Menu';
import MenuBurger from '../MenuBurger';

import styles from './index.module.scss';

export default function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const showHideMenu = () => {
      const minWidth = 768;
      const visibilityMenu = window.innerWidth >= minWidth;
      setShowMenu(visibilityMenu);
      setWindowWidth(window.innerWidth);
    };

    showHideMenu();
    window.addEventListener('resize', showHideMenu);
  }, []);

  return (
    <div className={styles.containerNavMenu}>
      <div className={styles.containerMenuBurger}>
        <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      {showMenu && <Menu windowWidth={windowWidth} minWidth={768} setShowMenu={setShowMenu} />}
    </div>
  );
}
