import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from "./Store/auth-context";
import CartProvider from './Store/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthContextProvider>
);
reportWebVitals();
