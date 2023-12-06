import React, { useState, useEffect } from "react";
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { Background } from "../Components/Background";
const server = 'http://127.0.0.1:5000';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(()=>{
    fetch(server + '/api').then(
      response => response.json())
    .then(data => setInitialData(data.listings))
    .catch(error => console.error("Error fetching data:", error, error.message, error.stack))
  }, []);

  return (
    <React.Fragment> 
    <Navbar />
    <div className="App"> 
      <div className="search-bar-holder">
        <SearchBar  />
      </div>  
      <Background />  
    </div>
    <div className="App">
      {initialData.map(item => (
        <div key={item.id}>
        <h1>{(item.title)}</h1>
        <h2>{(item.Description)}</h2>
        <h3>{(item.Category)}</h3>
        <h4>{(item.Price)}</h4>
        <h5>{(item.Image)}</h5>
        <h6>{item.date_created}</h6>
      </div>  
      ))}
    </div>
    </React.Fragment> 

  );
}

export default Home;