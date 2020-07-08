import React from 'react';

import Head from 'components/Head';
import Title from 'components/Title';

import styles from './index.module.scss';

export default function Header() {
  return (
    <>
      <Head title="Comó separar" />
      <header className={styles.header}>
        <Title Tag="h1" text="¿CÓMO SEPARAR TUS RESIDUOS?" center className={styles.title} />
        <p className={styles.subtitle}>
	  Si los residuos domésticos son separados y clasificados pueden convertirse en recursos, en lugar de basura.
	</p>
      </header>
    </>
  );
}
