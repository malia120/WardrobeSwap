import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import  Form from "../Components/Form";

/**
 * Page that shows the Sell page of the website.
 *
 * @returns  Sell components.
 */

function Results() {
  const [data] = useState([]); 
    return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
          <SearchBar placeholder="Search..." data={data} />
          </div>
        <div className="form-container">
            <h1>Here are your results: </h1>
        <Form />  
        </div>
      </div>
      </React.Fragment>
    );
}

export default Results;