import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'
import ShowListing from './ShowListing'

/**
 * Component showing a search bar with an input and a search button.
 *
 * @returns  search bar components.
 */

export const SearchBar = ({ placeholder, data, onSearch }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSearch = () => {
    if (!data || data.length === 0) return;
    const results = data.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
    onSearch(results);
    setNoResults(results.length === 0);
  };
  
  useEffect(() => {
    handleSearch();
  }, [search, data, onSearch]);

  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder={placeholder} value={search} onChange={handleInputChange} />
        <button id="search-button" onClick={handleSearch}>Search</button>
        <div className='result'>
        {noResults ? (
          <p>No results found for "{search}"</p>
        ) : (
        Array.isArray(searchResults) && searchResults.map((listing, index) => ( 
           <a key={index} className="Listing" href={ShowListing} target="_blank">
            <p> {listing.title} </p>
              </a>
        ))
      )}
        </div>
    </div>
  )
}
