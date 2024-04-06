import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children, Listings}) =>{

    const getCart = () => {
        let cart = {};
        for (let i = 1; i <= Listings.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };


    const [cartItems, setCartItems] = useState(getCart());

    const addToCart = (item) => {
        setCartItems((prevItems) => ({...prevItems, [item.id]: prevItems[item.id] +1 }));
    };

    const removeFromCart = (item) => {
        setCartItems((prevItems) => ({...prevItems, [item.id]: prevItems[item.id] +1 }));
    };
    console.log(cartItems);
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};