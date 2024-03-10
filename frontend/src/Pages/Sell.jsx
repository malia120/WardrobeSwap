import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import  Form from "../Components/Form";

/**
 * Page that shows the Sell page of the website.
 *
 * @returns  Sell components.
 */

function Sell() {
    return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
            <SearchBar  />
          </div>
        <div className="form-container">
        <div className="sell-heading">
            <h1>Sell your item</h1>
        </div>
        <Form />  
        </div>
      </div>
      </React.Fragment>
    );
}

export default Sell;