import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

function Women() {
  console.log("Women component rendered");

  return (
    <React.Fragment> 
      <Navbar />
      <div className="App"> 
        <div className="search-bar-holder">
          <SearchBar  />
        </div>  
        <div>
      <h1>Welcome to the Women Page</h1>
        </div>
      </div>
    
    
    </React.Fragment>
  );
}

export default Women;