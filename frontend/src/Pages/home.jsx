import React, { useState, useEffect } from "react";
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { Background } from "../Components/Background"
import { ShowListing } from "../Components/ShowListing";


function Home() {

  return (
  <React.Fragment> 
    <Navbar />
    <div className="App"> 
      <div className="search-bar-holder">
        <SearchBar  />
      </div>  
      <Background />
        <div className="sell-heading">
            <h1>Browse around!</h1>
        </div> 
      <div style={{ backgroundColor: "#E8DFE0" }}>
            <ShowListing />
          </div>    </div>
  </React.Fragment> 

  );
}

export default Home;