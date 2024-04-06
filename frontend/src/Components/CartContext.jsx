import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children, listings }) => {
    console.log("Listings:", listings);

    const getCart = () => {
        if (!listings) {
            
                return {};
        }
        let cart = {};
        for (let i = 0; i < listings.length; i++) { 
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
