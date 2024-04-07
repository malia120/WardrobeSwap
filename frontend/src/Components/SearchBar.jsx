import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import ShowListing from './ShowListing'

/**
 * Component showing a search bar with an input and a search button.
 *
 * @returns  search bar components.
 */

export const SearchBar = ({ placeholder, data }) => {
  const [search, setSearch] = useState('')

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder={placeholder} value={search} onChange={handleInputChange} />
        <button id="search-button">Search</button>
        <div className='result'>
        {Array.isArray(data) && data.map((listing, index) => (
           <a key={index} className="Listing" href={ShowListing} target="_blank">
            <p> {listing.title} </p>
              </a>
        ))}
        </div>
    </div>
  )
}
