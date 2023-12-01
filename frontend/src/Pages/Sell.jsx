import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import  Form from "../Components/Form";

function Sell() {
    return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
            <SearchBar  />
          </div>  
          <div>
            <h1>Sell your item</h1>
          </div>
          <Form />
        </div>
        
      </React.Fragment>
    );
}

export default Sell;