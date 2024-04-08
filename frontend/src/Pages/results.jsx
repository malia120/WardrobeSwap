import React, { useState, useEffect } from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import  Form from "../Components/Form";

/**
 * Page that shows the Sell page of the website.
 *
 * @returns  Sell components.
 */

function Results() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/api/listing')
//       .then(response => response.json())
//       .then(data => { console.log(data); setData(data)
//   }) 
//   .catch(error => console.error('Error fetching data:', error));
// },[]);
  
    return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
          <SearchBar placeholder="Search..." onSearch={handleSearchResults} />
          </div>
        <div className="form-container">
          {/* {searched && searchResults.length === 0 ? (
            <p>No search found</p>
          ) : (
            <Form /> 
          )} */}
          <ShowListing listings={searchResults} />
        </div>
      </div>
      </React.Fragment>
    );
}

export default Results;