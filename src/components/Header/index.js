import React from 'react';

import styles from './index.module.scss';

export default function Header({ children }) {
      return (
        <header className={styles.header}>
          {children}
        </header>
      );
}
