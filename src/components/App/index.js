import React, { useEffect, useState } from 'react';

import NavBar from '../NavBar';
import Main from '../Main';

import styles from './index.module.scss';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    const wasLoaded = () => {
      const loader = document.getElementById('loader');
      loader.parentNode.removeChild(loader);
      setIsLoaded(true);
    };

    wasLoaded();
  }, []);

  return (
    isLoaded &&
    <>
      <NavBar />
      <Main />
    </>
  );
}

export default App;
