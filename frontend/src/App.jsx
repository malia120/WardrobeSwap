import React, { useState, useEffect } from "react";
import {  Navbar  } from "./Components/Navbar";
import { SearchBar } from "./Components/SearchBar";
import { Background } from "./Components/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Women from "./Pages/women";
import Men from "./Pages/men";
import Children from "./Pages/children";
import aboutUs from "./Pages/about-us";
import thisPlatform from "./Pages/this-platform";


function App() {
  return (
    <React.Fragment> 
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/women" component={Women} />
            <Route path="/men" component={Men} />
            <Route path="/children" component={Children} />
            <Route path="/aboutUs" component={aboutUs} />
            <Route path="/thisplatform" component={thisPlatform} />
          </Routes>
      </Router>
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