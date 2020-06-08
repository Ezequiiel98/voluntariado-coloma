import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({ onClick, text }) {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};
