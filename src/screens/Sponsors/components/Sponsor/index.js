import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Sponsor({ img, name }) {
  return (
    <div className={styles.sponsor}>
      <div className={styles.logo}>
        <img src={img} alt={`logo de ${name}`} />
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  );
}

Sponsor.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
