import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Women from "./Pages/women";
import Men from "./Pages/men";
import Children from "./Pages/children";
import AboutUs from "./Pages/aboutUs";
import ThisPlatform from "./Pages/thisPlatform";
import Home from "./Pages/home";
import Sell from "./Pages/sell";

const server = 'http://127.0.0.1:5000';

function App() {
  const [initialData, setInitialData] = useState({});

  useEffect(()=>{
    fetch(server + '/api').then(
      response => response.json())
    .then(data => setInitialData(data))
    .catch(error => console.error("Error fetching data:", error, error.message, error.stack))
  }, []);

  return (
    <React.Fragment> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/this-platform" element={<ThisPlatform />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <div className="App">
        <h1>{(initialData.title)}</h1>
      </div>  
    </React.Fragment>
  );

}

export default App;