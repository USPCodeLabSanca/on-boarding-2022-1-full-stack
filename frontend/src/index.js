import React from 'react';
import { CookiesProvider } from "react-cookie";

import ReactDOM from 'react-dom/client';
import './index.css';
// import './LoginPage.css';
import App from './App';
import BarraNavegacao from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);