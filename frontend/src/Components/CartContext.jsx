import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

/**
 * Context provider component for managing the cart state.
 * 
 * This provides functionality to manage the items in the cart.
 * Allowing adding items to the cart and removing items from the cart.
 * 
 * @component
 * @param {Object} children The child components wrapped by the CartContextProvider.
 * @returns {JSX.Element} The JSX representation of the cart context provider.
 */

export const CartContextProvider = ({ children }) => {


    // State to manage cart items
    const [cartItems, setCartItems] = useState([]);

    /**
    * Function to add an item to the cart.
    * 
    * @param {Object} item The item to be added to the cart.
    */

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    /**
    * Function to remove an item from the cart.
    * 
    * @param {string} itemID The ID of the item to be removed from the cart.
    */
    const removeFromCart = (itemID) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemID));
    };

    console.log(cartItems);
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );

};
