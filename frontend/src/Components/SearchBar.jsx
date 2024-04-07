import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'
import ShowListing from './ShowListing'

/**
 * Component showing a search bar with an input and a search button.
 *
 * @returns  search bar components.
 */

export const SearchBar = ({ placeholder, data }) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  useEffect(() => {
    if (!data) return;
    const results = data.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search, data]);

  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder={placeholder} value={search} onChange={handleInputChange} />
        <button id="search-button" onClick={() => setSearchResults(search)}>Search</button>
        <div className='result'>
        {Array.isArray(searchResults) && searchResults.map((listing, index) => ( 
           <a key={index} className="Listing" href={ShowListing} target="_blank">
            <p> {listing.title} </p>
              </a>
        ))}
        </div>
    </div>
  )
}
