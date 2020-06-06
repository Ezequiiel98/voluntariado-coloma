import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

export default function MenuItem({ textItem, internalPath, externalPath, icon, onClick }) {
  return (
    <li className={externalPath ? styles.itemMenuSocial : styles.itemMenuNav}>
      {externalPath ? (
        <a target={icon && 'blank'} href={externalPath} className={styles.linkMenu}>
          {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />} {textItem}
        </a>
      ) : (
        <Link
        to={internalPath}
        className={styles.linkMenu}
         onClick={onClick}
        >
          {textItem}
        </Link>
      )}
    </li>
    );
}


MenuItem.propTypes = {
  externalPath: PropTypes.string,
  icon: PropTypes.string,
  internalPath: PropTypes.string,
  textItem: PropTypes.string,
  onClick: PropTypes.func
};

MenuItem.defaultProps = {
  textItem: ''
};
