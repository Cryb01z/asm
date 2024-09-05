import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);
