import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({ text, path }) {
  return (
      <Link to={path} className={styles.link}>
    <button className={styles.button} type="button">
        {text}

    </button>
      </Link>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};
