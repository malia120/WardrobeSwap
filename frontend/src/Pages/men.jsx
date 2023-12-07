import React, { useState, useEffect } from "react";
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
const server = 'http://127.0.0.1:5000';

function Men() {
  console.log("Men component rendered");
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetch(server + '/api')
      .then(response => response.json())
      .then(data => setInitialData(data.listings))
      .catch(error => console.error("Error fetching data:", error, error.message, error.stack));
  }, []);

  const menItems = initialData.filter(item => item.category === "Men");

  return (
    <React.Fragment> 
      <Navbar />
      <div className="App"> 
        <div className="search-bar-holder">
          <SearchBar  />
        </div>  
        <div className="form-container">
        <div className="sell-heading">
            <h1>Welcome to the Men's section</h1>
        </div>
        </div>
      <div className='Card'>
        {menItems.map(item => (
          <div key={item.id} className="Cardview">
            <img src={item.image} alt='image' className="cImage"></img>
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
    
    </React.Fragment>
    );
}

export default Men;