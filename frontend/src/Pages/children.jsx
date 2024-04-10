import React, { useState, useEffect } from "react";
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
const server = 'http://127.0.0.1:5000';

/**
 * Page that shows the Children's section of the Web page.
 * Fetches data from the database, filters it so that it only shows Children's items, 
 * and renders the item.
 *
 * 
 * @returns  Children components.

 */
function Children() {
  console.log("Children component rendered");
  // State to store the initial data fetched from the server
  const [initialData, setInitialData] = useState([]);

  // Fetch the data from the database 
  useEffect(() => {
    fetch(server + '/api/listing')
      .then(response => response.json())
      .then(data => setInitialData(data.listings))
      .catch(error => console.error("Error fetching data:", error, error.message, error.stack));
  }, []);

  // Filter items to show in only Children's page
  const childrenItems = initialData.filter(item => item.category === "Children");

  return (
    <React.Fragment> 
      <Navbar />
      <div className="App"> 
        <div className="search-bar-holder">
          <SearchBar  />
        </div>  
        <div className="form-container">
        <div className="sell-heading">
            <h1>Welcome to the Children's section</h1>
        </div>
        </div>
      <div className='Card'>
        {childrenItems.map(item => (
          <div key={item.id} className="Cardview">
          <img src={`http://localhost:5000/uploads/${item.image}`} alt='image' className="cImage" />
            <div className="Card_info">
              <h1 className="Name">{item.title}</h1>
              <div className="display">
                <div className="Card Description">{item.description}</div>
                <div className="Card Category">{item.category}</div>
                <div className="Card price">£{item.price}</div>
                <div className="Card date">{item.date_created}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <footer/> 
    </React.Fragment>
    );
}

export default Children;