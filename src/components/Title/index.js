import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Title({ Tag, text, center, color, backgroundColor, className }) {
  return <Tag className={`${className && className} ${center && styles.center} ${color && styles[color.toLowerCase()]} ${backgroundColor && styles[backgroundColor.toLowerCase()]}`}>{text}</Tag>;
}

Title.propTypes = {
  Tag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string
};
