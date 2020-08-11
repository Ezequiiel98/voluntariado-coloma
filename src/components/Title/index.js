import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Title({ Tag = 'h1', text, center, color, backgroundColor, className }) {
  let myStyles = [`${className}`,
    `${center && styles.center}`,
    `${styles[color?.toLowerCase()]}`, 
    `${styles[backgroundColor?.toLowerCase()]}`];
 
  myStyles = myStyles.filter(style => style !== 'undefined').join(' ');
  
  return <Tag className={myStyles}>{text} </Tag>
}

Title.propTypes = {
  Tag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string
};
