import React from "react";
import { Routes, Route } from "react-router-dom";
import {  Navbar  } from "./Components/Navbar";
import Women from "./Pages/women";
import Men from "./Pages/men";
import Children from "./Pages/children";
import AboutUs from "./Pages/aboutUs";
import ThisPlatform from "./Pages/thisPlatform";
import Home from "./Pages/home";


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
      </Routes>
    </React.Fragment>
  );

}

export default App;