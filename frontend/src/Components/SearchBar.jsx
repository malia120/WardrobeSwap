import React, { useState, useEffect, useContext } from 'react';
import { FaSearch } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
/**
 * Component showing a search bar with an input and a search button.
 *
 * @returns  search bar components.
 */

export const SearchBar = ({ placeholder, data, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);
  const {addToCart} = useContext(CartContext)

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    if (value === "") {
      setNoResults(false);
      setSearchResults([]); 
    }
  };

  const handleSearch = () => {
    if (!data || data.length === 0) return;
    
    const results = data.filter(item =>
      item.title.toLowerCase().startsWith(searchInput.toLowerCase())
    );
  
    setSearchResults(results);
    if (typeof onSearch === 'function') { 
      onSearch(results);
    }
    setNoResults(results.length === 0);
  };
  
  useEffect(() => {
    if (!searchInput) return;
  
  fetch(`http://127.0.0.1:5000/api/listing?query=${searchInput}`)
    .then(response => response.json())
    .then(data => {
      if (data.listings && data.listings.length > 0) {
        setSearchResults(data.listings);
        if (typeof onSearch === 'function')
        onSearch(data.listings);
        setNoResults(false);
      } else {
        setSearchResults([]);
        if (typeof onSearch === 'function')
        onSearch([]);
        setNoResults(true);
      }
    })
    .catch(error => {
      console.error('Error searching:', error);
    });
  }, [searchInput, data, onSearch]);

  useEffect(() => {
    if (!id) return;
    fetch(`http://127.0.0.1:5000/api/listing/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch listing');
        } return response.json();
        })
        .then(data => setListing(data))
        .catch(error => setError(error.message));
        
}, [id]);

  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder={placeholder} value={searchInput} onChange={handleInputChange} />
        {searchInput && (
        <div className='result'>
          {noResults ? (
            <p>No results found for "{searchInput}"</p>
          ) : (
        Array.isArray(searchResults) && searchResults.map((listing, index) => ( 
          <Link to={`/listing/${listing.id}`} key={listing.id} className="Listing">
              <p>{listing.title}</p>
            </Link>
        ))
      )}
        </div>
      )}
      <button id="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

