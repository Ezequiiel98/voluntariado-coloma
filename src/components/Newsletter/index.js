import React,{ useState } from 'react';

import Title from '../Title';
import NewsletterForm from './components/NewsletterForm';
 
import styles from './index.module.scss';

export default function Newsletter() {
  const [sentFormSuccessfully, setSentFormSucessfully] = useState(false);

  return (
    <div className={styles.newsletter}>
      <Title Tag="h2" text="¡NO TE PIERDAS TIPS E IDEAS PARA SER MAS ECONSIENTE!" />
      {sentFormSuccessfully ? <p>Enviado :D </p> : <NewsletterForm onSentFormSuccessfully={setSentFormSucessfully} />}
      <p className={styles.place}>Miramar, Córdoba, Argentina.</p>
   </div>
  );
}
