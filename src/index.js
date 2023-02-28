import React from 'react';
import ReactDOM from 'react-dom/client';
import {Application} from './components/Application'
import { SignIn } from "./components/SignIn";
import { LogIn } from "./components/LogIn";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application/>
    <SignIn/>
    <LogIn/>
  </React.StrictMode>
);
