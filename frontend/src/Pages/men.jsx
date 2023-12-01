import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

function Men() {
    return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
            <SearchBar  />
          </div>  
          <div>
        <h1>Welcome to the Men Page</h1>
      </div>
        </div>
      
      
      </React.Fragment>
    );
}

export default Men;