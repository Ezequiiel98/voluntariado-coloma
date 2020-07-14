import React from 'react';

import Title from '../Title';
import NewsletterForm from './components/NewsletterForm';
 
import styles from './index.module.scss';

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <Title Tag="h2" text="¡NO TE PIERDAS TIPS E IDEAS PARA SER MAS ECONSIENTE!" />
      <NewsletterForm />
      <p className={styles.place}>Miramar, Córdoba, Argentina.</p>
   </div>
  );
}
