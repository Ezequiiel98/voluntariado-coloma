import React, { useState, useEffect } from 'react';

import Menu from './components/Menu';
import MenuBurger from './components/MenuBurger';
import styles from './index.module.scss';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const showHideMenu = () => {
      const minWidth = 768;
      const visibilityMenu = window.innerWidth >= minWidth;
      setShowMenu(visibilityMenu);
      setinnerWidth(window.innerWidth);
    };

    showHideMenu();
    window.addEventListener('resize', showHideMenu);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.containerNav}>
        <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
        {showMenu && <Menu windowWidth={innerWidth} minWidth={768} setShowMenu={setShowMenu} />}
      </div>
    </nav>
  );
}
