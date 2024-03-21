import React from 'react'
import { FaSearch } from 'react-icons/fa'

/**
 * Component showing a search bar with an input and a search button.
 *
 * @returns  search bar components.
 */

export const SearchBar = () => {
  
  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder="Search for items" />
        <button id="search-button">Search</button>
    </div>
  )
}
