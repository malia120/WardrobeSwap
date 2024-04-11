import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './Components/CartContext';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


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
const initialOptions = {
  "client-id": "AeNWP5JJwk9UiNJJ3XdOTaKfwn4h9S48HsEou3r62ER1VxPx8eSmwM6ZcBhx69f8iK3Cr_5phJqCWM9-",
  currency: "GBP",
  intent: "capture",
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
        <PayPalScriptProvider options={initialOptions}>
          <App />
        </PayPalScriptProvider>
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
