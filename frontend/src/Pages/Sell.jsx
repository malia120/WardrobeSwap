import React, { useContext } from 'react';
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import Form from "../Components/Form";
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthContext';

/**
 * Page that shows the Sell page of the website.
 *this componnet represents the page where users sell their items
 *it has a navigation bar, a sear char, and a form of selling items
 *users must have an accout or be verified to accest this page or they will be redirected to the login page

 *@component
 * @returns  Sell components.
 */

const Sell = () => {
  //checking verification status using context
  const { isAuthenticated } = useContext(AuthContext);
  //redirecting to the loging page if the user is not verified
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="search-bar-holder">
          <SearchBar />
        </div>
        <div className="form-container">
          <div className="sell-heading">
            <h1>Sell your item</h1>
          </div>
          <Form />
        </div>
      </div>
      <footer />
    </React.Fragment>
  );
}

export default Sell;