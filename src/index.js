import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollTop from './components/ScrollTop';
import './index.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
