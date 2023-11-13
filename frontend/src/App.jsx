import React, { useState, useEffect } from "react";
import {  Navbar  } from "./Components/Navbar";
import { SearchBar } from "./Components/SearchBar";

function App() {
  return (
    <React.Fragment> 
      <Navbar />
      <div className="App"> 
        <div className="search-bar-holder">
          <SearchBar  />
        </div>    
      </div>
    </React.Fragment>
  );
  
}

export default App;