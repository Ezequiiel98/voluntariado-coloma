import React, { useEffect, useState } from 'react';

import NavBar from '../NavBar';
import Main from '../Main';

import styles from './index.module.scss';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(()=>{
    const hiddenLoading = () => setLoad(false);
    hiddenLoading();
  }, []);
  return (
    load ? <div><h1>stoy kargan2</h1></div>
    : <>
      <NavBar />
      <Main />
    </>
  );
}

export default App;
