import React from 'react';

import styles from './index.module.scss';

export default function Footer(){
  const year = new Date().getFullYear();
  return(
   <footer className={styles.footer}>
     <p className={styles.copyright}>Coloma - Todos los derechos reservados &#169; { year }</p>
   </footer>
  );
};

