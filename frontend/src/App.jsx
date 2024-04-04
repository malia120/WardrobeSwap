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
import ListingDetail from "./Components/ListingDetail";

/**
 * Main App component that sets up the routing for different pages.
 *
 * @returns root components.
 */

function App() {

  return (
    <React.Fragment> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/this-platform" element={<ThisPlatform />} />
        <Route path="/sell" element={<Sell />} />
        <Route path=':item.id' element={<ShowListing/>}/>
        <Route path="/listings/:id" element={<ListingDetail />} />
        <Route path="/cart" element={<Cart />} />   
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </React.Fragment>
  );

}

export default App;