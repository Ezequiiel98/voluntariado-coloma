import React, { useEffect, useState } from 'react';
import loader from 'assets/loader.jpeg';

import NavBar from '../NavBar';
import Main from '../Main';

import styles from './index.module.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const wasLoaded = () => {
      const loader = document.getElementById('loader');
      setIsLoading(false);
      loader.parentNode.removeChild(loader);
    };

    wasLoaded();
  }, []);

  return (
    !isLoading &&
    <>
      <NavBar />
      <Main />
    </>
  );
}

export default App;
