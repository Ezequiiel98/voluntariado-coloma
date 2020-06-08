import React from 'react';

import Newsletter from '../../components/Newsletter';

import Header from './components/Header';
import Main from './components/Main';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Newsletter />
    </div>
  );
}
