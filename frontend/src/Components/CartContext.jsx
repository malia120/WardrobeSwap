import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    // console.log("Listings:", listings);

    // const getCart = () => {
    //     if (!listings) {
            
    //             return {};
    //     }
    //     let cart = {};
    //     for (let i = 0; i < listings.length; i++) { 
    //         cart[i] = 0;
    //     }
    //     return cart;
    // };


    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        // if (item && item.id) {
        setCartItems((prevItems) => [...prevItems, item]);
        };


    const removeFromCart = (itemID) => {
        // if (item && item.id) {
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemID));
        };

    console.log(cartItems);
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );

};
