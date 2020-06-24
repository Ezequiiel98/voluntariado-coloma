import React from 'react';

import styles from './index.module.scss';

export default function ContactForm() {
  return (
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
  );
}

