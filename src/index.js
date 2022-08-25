import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/null.scss";
import "./scss/vars.scss";
import { BrowserRouter } from "react-router-dom";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
