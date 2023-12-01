import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

function ThisPlatform() {
  return (
    <React.Fragment> 
      <Navbar />
      <div className="App"> 
        <div className="search-bar-holder">
          <SearchBar  />
        </div>  
        <div>
          <h1>Let me tell you more about our platform...</h1>
        </div>
      </div>
    
    
    </React.Fragment>
  );
}

export default ThisPlatform;