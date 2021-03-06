import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './rainbow.css';

const rootElement = document.getElementById('react-root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

reportWebVitals();
