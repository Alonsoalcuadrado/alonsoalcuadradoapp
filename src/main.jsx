import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';

import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
