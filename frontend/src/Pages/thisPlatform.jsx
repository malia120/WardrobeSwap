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
        <div className="form-container">
        <div className="sell-heading">
            <h1>Let me tell you more about our platform...</h1>
        </div>
        </div>
      </div>
    
    
    </React.Fragment>
  );
}

export default ThisPlatform;