import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  Navbar  } from "./Components/Navbar";
import { SearchBar } from "./Components/SearchBar";
import { Background } from "./Components/Background";
// import Women from './Pages/women';

function App() {
  return (
    <React.Fragment> 
      <Navbar />
      {/* <Routes>
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/platform" element={<Platform />} />
      </Routes> */}
      <div className="App"> 
        <div className="search-bar-holder">
          <SearchBar  />
        </div>  
        <Background />  
      </div>
    </React.Fragment>
  );

}

export default App;