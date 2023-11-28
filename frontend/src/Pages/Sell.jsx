import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

function Sell() {
    return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
            <SearchBar  />
          </div>  
        </div>
      <div>
        <h1>Sell your item</h1>
        {/* A Form */}
      </div>
      
      </React.Fragment>
    );
}

export default Sell;