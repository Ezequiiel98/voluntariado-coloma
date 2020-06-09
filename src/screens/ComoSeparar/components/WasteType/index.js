import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../../../components/Title';

import styles from './index.module.scss';

export default function WasteType({ title, subtitle, backgroundColor, paragraph, bold, afterBoldText }) {
  return (
    <article className={styles.wasteType}>
      <Title Tag="h3" center text={title} className={styles.title} backgroundColor={backgroundColor} />
      {subtitle && <Title Tag="h5" center text={subtitle} className={styles.subtitle} backgroundColor={backgroundColor} />}
      <p className={styles.paragraph}>
        {paragraph}
        {bold && <b className={styles.bold}>{bold}</b>}
        {afterBoldText && afterBoldText}
      </p>
    </article>
  );
}

WasteType.propTypes = {
  paragraph: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  afterBoldText: PropTypes.string,
  backgroundColor: PropTypes.string,
  bold: PropTypes.string,
  subtitle: PropTypes.string
};
