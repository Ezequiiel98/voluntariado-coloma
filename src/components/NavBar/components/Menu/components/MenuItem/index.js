import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function MenuItem({ textItem, column, internalPath, onClick }) {
  return (
    <li className={column ? styles.itemMenuColumn : styles.itemMenu}>
      <Link
        to={internalPath}
        className={styles.linkMenu}
         onClick={onClick}
      >
        {textItem}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  internalPath: PropTypes.string.isRequired,
  textItem: PropTypes.string.isRequired,
  column: PropTypes.bool
};

MenuItem.defaultProps = {
  column: false
};
