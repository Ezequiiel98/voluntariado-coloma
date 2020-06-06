import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';
import MenuItem from './components/MenuItem';
import { NAV_MENU, NAV_SOCIAL } from './constants/menuItems';

export default function Menu({ windowWidth, minWidth, setShowMenu, socialNav }) {
  const MENU_ITEMS = socialNav ? NAV_SOCIAL : NAV_MENU;

  const handleClick = () => {
    if (windowWidth < minWidth) {
      setShowMenu(false);
    }
  };
  return (
    <ul className={socialNav ? styles.menuSocial : styles.menu}>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.key} {...item} onClick={handleClick} />
      ))}
    </ul>
  );
}

Menu.propTypes = {
  minWidth: PropTypes.number,
  setShowMenu: PropTypes.func,
  socialNav: PropTypes.bool,
  windowWidth: PropTypes.number

};

Menu.defaultProps = {
  minWidth: 0,
  setShowMenu: () => null,
  socialNav: false,
  windowWidth: 0
};
