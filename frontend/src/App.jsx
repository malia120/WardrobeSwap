import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Women from "./Pages/women";
import Men from "./Pages/men";
import Children from "./Pages/children";
import AboutUs from "./Pages/aboutUs";
import ThisPlatform from "./Pages/thisPlatform";
import Home from "./Pages/home";
import Sell from "./Pages/Sell";
import ShowListing from "./Components/ShowListing";
import Cart from "./Pages/cart";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ListingDisplay from './Components/ListingDisplay';
import { CartContextProvider } from "./Components/CartContext";

/**
 * Main App component that sets up the routing for different pages.
 *
 * @returns root components.
 */

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/listing")
      .then(response => response.json())
      .then(data => setListings(data.listings))
      .catch(error => console.error("Error fetching listings:", error));
  }, []);

  return (
    <React.Fragment>
      <CartContextProvider listings={listings}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/this-platform" element={<ThisPlatform />} />
        <Route path="/sell" element={<Sell />} />
        <Route path=':item.id' element={<ShowListing/>}/>
        <Route path="/listings/:id" element={<ListingDisplay />} />
        <Route path="/cart" element={<Cart />} />   
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      </CartContextProvider>
    </React.Fragment>
  );

}

export default App;