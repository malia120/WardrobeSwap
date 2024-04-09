import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {  Navbar  } from "../Components/Navbar";
import { CartContext } from "../Components/CartContext";
import { CartItem } from "../Components/cartItems";


/**
 * Page that shows the Home page of the website.
 *
 * @returns  Home components.

 */

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    console.log('Rendering Cart component');

    return (
        <React.Fragment>
            <Navbar />
            <div className="Cart">
                <h1 className="Cart-heading">Your Cart</h1>
                    {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <div>
                    <p className="Cart-message">Your cart is currently empty. Add something to your cart before proceeding.</p>
                    <p className="Cart-link"><Link to="/">Click here to browse</Link></p>
                </div>
                )}
            </div>
            
        </React.Fragment>
    
    );

};

export default Cart;