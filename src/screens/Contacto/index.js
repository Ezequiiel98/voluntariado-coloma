import React from 'react';
import Title from 'components/Title';
import Newsletter from 'components/Newsletter';

import ContactForm from './components/ContactForm';
import SocialNetworks from './components/SocialNetworks';
import styles from './index.module.scss';

export default function Contacto() {
  return (<>
    <Title Tag="h1" text="¡CONTACTANOS!" center />
    <Title Tag="h3" text="¡Hola! Si deseas contactarte déjanos un mensaje aquí o en nuestras redes sociales." center className={styles.subtitle} />
    <div className={styles.container}>
      <ContactForm />
      <SocialNetworks />
    </div>
    <Newsletter />
  </>);
    }
