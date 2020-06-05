import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';
import MenuItem from './components/MenuItem';
import { NAV_MENU } from './constants/menuItems';

export default function Menu({ column, windowWidth, minWidth, setShowMenu }) {
  const handleClick = () => {
    if (windowWidth < minWidth) {
      setShowMenu(false);
    }
  };
  return (
    <ul className={column ? styles.menuColumn : styles.menu}>
      {NAV_MENU.map(item => (
        <MenuItem key={item.key} {...item} column={column} onClick={handleClick} />
      ))}
    </ul>
  );
}

Menu.propTypes = {
  column: PropTypes.bool
};

Menu.defaultProps = {
  column: false
};
