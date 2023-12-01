import React, { useState, useEffect } from "react";
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { Background } from "../Components/Background";
const server = 'http://127.0.0.1:5000';

function Home() {
  const [initialData, setInitialData] = useState({});

  useEffect(()=>{
    fetch(server + '/api').then(
      response => response.json())
    .then(data => setInitialData(data))
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
        <h1>{(initialData.title + ' ' + initialData.completed)}</h1>
      </div>  
    </React.Fragment> 

  );
}

export default Home;