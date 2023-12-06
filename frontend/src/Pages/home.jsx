import React, { useState, useEffect } from "react";
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { Background } from "../Components/Background";
import { Card } from "../Components/Card";

const server = 'http://127.0.0.1:5000';

function Home() {
  return (
    <React.Fragment> 
    <Navbar />
    <div className="App"> 
      <div className="search-bar-holder">
        <SearchBar  />
      </div>  
      <Background />  
    </div>
    <Card />
    </React.Fragment> 

  );
}

export default Home;