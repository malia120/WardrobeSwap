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
          <div>
            <h1>Here is a litte more about us:</h1>
          </div>
        </div>
      
      </React.Fragment>
  );
}

export default AboutUs;