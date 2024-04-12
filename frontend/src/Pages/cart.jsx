import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { CartContext } from "../Components/CartContext";
import { CartItem } from "../Components/cartItems";
import { AuthContext } from '../Components/AuthContext';


/**
 * Page that shows the Home page of the website.
 * @component
 * @returns  cart components.
 *
 */

const Cart = () => {
  //gaining cart items and proof status from context
  const { cartItems } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);

  //shift to login page if user is not verified
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  //calculating total price of the items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  const totalPriceString = totalPrice.toFixed(2);

  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="form-container">
          <div className="Cart">
            <h1 className="Cart-heading">Your Cart</h1>
            {cartItems.length > 0 ? (
              <React.Fragment>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <div className="Cart-total">
                  <p className="Cart-total-text">Total: £{totalPriceString}</p>
                  <Link to="/checkout">
                    <button className="checkout-button">Checkout</button>
                  </Link>
                </div>
              </React.Fragment>

            ) : (
              <div>
                <p className="Cart-message">Your cart is currently empty. Add something to your cart before proceeding.</p>
                <p className="Cart-link"><Link to="/">Click here to browse</Link></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer />
    </React.Fragment>

  );

};

export default Cart;
