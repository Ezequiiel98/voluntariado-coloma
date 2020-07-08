import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollTop from './components/ScrollTop';
import './index.scss';
import App from './components/App';

ReactDOM.render(
  <Router>
    <ScrollTop />
    <App />
  </Router>,
  document.getElementById('root')
);
