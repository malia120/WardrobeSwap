import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

function Children() {
  return (
    <React.Fragment> 
      <Navbar />
      <div className="App"> 
        <div className="search-bar-holder">
          <SearchBar  />
        </div>  
      </div>
    <div>
      <h1>Welcome to the Children Page</h1>
      {/* Add content for the Children page */}
    </div>
    
    </React.Fragment>
  );
}

export default Children;