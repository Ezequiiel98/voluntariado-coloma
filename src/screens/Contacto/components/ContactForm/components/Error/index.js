import React from 'react';

import styles from './index.module.scss';

export default function Error({children}) {
  return <span className={styles.error} > { children } </span>;
}
