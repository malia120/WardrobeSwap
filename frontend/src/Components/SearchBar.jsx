import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'
import ShowListing from './ShowListing'

/**
 * Component showing a search bar with an input and a search button.
 *
 * @returns  search bar components.
 */

export const SearchBar = ({ placeholder, data, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleSearch = () => {
    if (!data || data.length === 0) return;
    const results = data.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
    onSearch(results);
    setNoResults(results.length === 0);
  };
  
  useEffect(() => {
    if (!searchInput) return;
    handleSearch();

  fetch(`/api/listing?query=${searchInput}`)
    .then(response => response.json())
    .then(data => {
      if (data.listings && data.listings.length > 0) {
        setSearchResults(data.listings);
        onSearch(data.listings);
        setNoResults(false);
      } else {
        setSearchResults([]);
        onSearch([]);
        setNoResults(true);
      }
    })
    .catch(error => {
      console.error('Error searching:', error);
    });
  }, [searchInput, data, onSearch]);
  };

  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder={placeholder} value={searchInput} onChange={handleInputChange} />
        <button id="search-button" onClick={handleSearch}>Search</button>
        <div className='result'>
        {noResults ? (
          <p>No results found for "{searchInput}"</p>
        ) : (
        Array.isArray(searchResults) && searchResults.map((listing, index) => ( 
            <a key={index} className="Listing" href={ShowListing} target="_blank" rel="noreferrer">
            <p> {listing.title} </p>
              </a>
        ))
      )}
        </div>
    </div>
  )

