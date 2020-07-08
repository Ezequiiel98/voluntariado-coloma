import React, { useState, useEffect } from 'react';

import Menu from '../Menu';
import MenuBurger from '../MenuBurger';

import styles from './index.module.scss';

export default function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const MIN_WIDTH = 768;
  
  useEffect(() => {
    const showHideMenu = () => {
      const visibilityMenu = window.innerWidth >= MIN_WIDTH;
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
      {showMenu && <Menu windowWidth={windowWidth} minWidth={MIN_WIDTH} setShowMenu={setShowMenu} />}
    </div>
  );
}
