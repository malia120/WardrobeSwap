import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Women from "./Pages/women";
import Men from "./Pages/men";
import Children from "./Pages/children";
import AboutUs from "./Pages/aboutUs";
import ThisPlatform from "./Pages/thisPlatform";
import Home from "./Pages/home";
import Sell from "./Pages/Sell";

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
      </Routes>
    </React.Fragment>
  );

}

export default App;