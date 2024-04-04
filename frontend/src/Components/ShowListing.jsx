import React, { useState, useEffect } from "react";
import "../Style/App.css";
import { Link, useParams } from "react-router-dom";
const server = 'http://127.0.0.1:5000';

/**
 * Component that shows listings fetched from the server.
 * Uses React inputs for UseState and useEffect for fetching data from the database.
 *
 * @returns  show listing components.
 */


export function ShowListing({ items }) {
  // Storing initial data fetched from the server
  const { id } = useParams(); 

  const [listings, setListing] = useState(null);
  useEffect(()=>{
    fetch(`${server}/api/listing/${id}`)
      .then(response => response.json())
    .then(data => setListing(data))
    .catch(error => console.error("Error fetching data:", error));
  }, [id]);
  
    return (
      <React.Fragment> 
      <div className='Card'>
      {listings.map(item => (
        <div key={item.id} className="Cardview">
         <img src={`http://localhost:5000/uploads/${item.image}`} alt='image' className="cImage" />
            <div className="Card_info">
              <h1 className="Name">{(item.title)}</h1>
                <div className="display">
                  <div className="Card Description">{(item.description)}</div>
                  <div className="Card Category">{(item.category)}</div>
                  <div className="Card price">£{(item.price)}</div>
                  <div className="Card date">{(item.date_created)}</div>
                </div>
            </div>
          </div>        
    ))}
    </div>
    </React.Fragment> 
  );
}

export default ShowListing;