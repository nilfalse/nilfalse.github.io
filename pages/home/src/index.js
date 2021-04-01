import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-root')
);

reportWebVitals();
