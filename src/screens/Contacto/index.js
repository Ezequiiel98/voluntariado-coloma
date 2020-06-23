import React from 'react';
import Title from 'components/Title';
import Newsletter from 'components/Newsletter';

import styles from './index.module.scss';

export default function Contacto() {
  return (<>
    <Title Tag="h1" text="¡CONTACTANOS!" center />
    <Title Tag="h3" text="¡Hola! Si deseas contactarte déjanos un mensaje aquí o en nuestras redes sociales." className={styles.subtitle} />
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="name"> Nombre: </label>
          <input className={styles.input} type="text" id="name" placeholder="Nombre" required />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="email"> Correo electrónico: </label>
          <input className={styles.input} type="email" id="email" placeholder="Correo electrónico" required />
        </div>
        <div className={styles.containerTextarea}>
          <label className={styles.label} htmlFor="message"> Mensaje:  </label>
          <textarea className={styles.textarea} type="text" id="message" placeholder="Escribe aquí tu mensaje" required />
        </div>
        <button disabled className={styles.button} type="submit">Enviar</button>
      </form>
      <div className={styles.containerSocialNet}>
        <div className={styles.socialNet}>
          <div className={styles.iconSocialNet} />
          <p className={styles.userSocialNet}>@proyectoeconsientes</p>
        </div>
        <div className={styles.socialNet}>
          <div className={styles.iconSocialNet} />
          <p className={styles.userSocialNet}>@proyectoeconsientes</p>
        </div>
        <div className={styles.socialNet}>
          <div className={styles.iconSocialNet} />
          <p className={styles.userSocialNet}>@proyectoeconsientes</p>
        </div>
        <div className={styles.socialNet}>
          <div className={styles.iconSocialNet} />
          <p className={styles.userSocialNet}>@proyectoeconsientes</p>
        </div>
      </div>

    </div>
    <Newsletter />
  </>);
    }
