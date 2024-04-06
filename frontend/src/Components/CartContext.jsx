import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {



    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        };


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
