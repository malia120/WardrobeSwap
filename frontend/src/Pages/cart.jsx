import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  Navbar  } from "../Components/Navbar";


/**
 * Page that shows the Home page of the website.
 *
 * @returns  Home components.

 */

function Cart() {

    return (
        <React.Fragment>
            <Navbar />
            <div className="App">
                <div className="Cart-container">
                    <h1 className="Cart-heading">Your Cart</h1>
                    <p className="Cart-message">Your cart is currently empty. Add something to your cart before proceeding.</p>
                    <p className="Cart-link"><Link to="/">Click here to browse</Link></p>
                </div>
            </div>
            
        </React.Fragment>
    
    );

}

export default Cart;