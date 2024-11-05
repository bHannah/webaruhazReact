import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiProvider } from './context/ApiContext';
import { KosarProvider } from './context/KosarContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ApiProvider>
  <KosarProvider>
    <App />
  </KosarProvider>
  </ApiProvider>
  </React.StrictMode>
);

reportWebVitals();
