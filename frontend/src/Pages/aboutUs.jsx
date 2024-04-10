import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

/**
 * Page that shows the About Us of the website.
 *
 * @returns  About us components.
 */

function AboutUs() {
  return (
      <React.Fragment> 
        {/* Navigation bar component */}
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
          {/* Search bar component */}
            <SearchBar  />
          </div>  
          <div className="form-container">
        <div className="sell-heading">
            <h1>Here is a litte more about us:</h1>
        </div>
        </div>
        </div>
        <footer/> 
      </React.Fragment>
  );
}

export default AboutUs;