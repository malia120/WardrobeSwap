import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './Components/CartContext';

/**
 * Root showing of the React application.
 * 
 * It initializes the ReactDOM root and renders the entire website within a BrowserRouter.
 * StrictMode is on for more development-time checks.
 * 
 * @constant {ReactRoot} root - for showing the React website.
 * @returns {void}
 */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
