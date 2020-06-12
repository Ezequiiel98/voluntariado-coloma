import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../../../components/Title';

import styles from './index.module.scss';

export default function Subtitle({ days, wasteType, place, backgroundColorPlace }) {
  return (
    <div className={styles.container}>
      <Title Tag="h2" text={days} className={styles.underline} />
      <p className={styles.paragraph}>{wasteType}<span className={styles[backgroundColorPlace]}>{place}</span></p>
    </div>
  );
}


Subtitle.propTypes = {
  backgroundColorPlace: PropTypes.oneOf(['green', 'lightblue']).isRequired,
  days: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  wasteType: PropTypes.string.isRequired
};
