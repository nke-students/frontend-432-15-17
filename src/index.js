import React from 'react';
import ReactDOM from 'react-dom/client';
import { Aplication } from './components/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aplication name = {"Boba"}/>
  </React.StrictMode>
);
