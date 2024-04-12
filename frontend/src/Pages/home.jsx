import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { Background } from "../Components/Background"
import { ShowListing } from "../Components/ShowListing";

/**
 * Page that shows the Home page of the website.
 * this component represents the landing page of the website where users can navigate through listings.
 * it also has a navigate bar, search bar, background image, and section to display listing.
 * 
 * @components
 * @returns  Home components.

 */

function Home() {

  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="search-bar-holder">
          <SearchBar />
        </div>
        <Background />
        <div className="sell-heading">
          <h1>Browse around!</h1><ShowListing />
        </div>
        <div style={{ backgroundColor: "#E8DFE0" }}>
          <footer />
        </div>
      </div>


    </React.Fragment>

  );
}

export default Home;