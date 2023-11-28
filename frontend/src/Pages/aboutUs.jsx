import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

function AboutUs() {
  return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
            <SearchBar  />
          </div>  
        </div>
      <div>
        <h1>Welcome to the AboutUs Page</h1>
        {/* Add content for the Women page */}
      </div>
      
      </React.Fragment>
  );
}

export default AboutUs;