import React from 'react';

import NavBar from '../NavBar';
import ComoSeparar from '../../screens/ComoSeparar';
import DondeLlevar from '../../screens/DondeLlevar';

import styles from './index.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <ComoSeparar />
      <DondeLlevar />
    </>
  );
}

export default App;
