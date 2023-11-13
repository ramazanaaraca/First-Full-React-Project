import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, RegProvider } from './Context/AuthContext';
import './Components/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </>
);


