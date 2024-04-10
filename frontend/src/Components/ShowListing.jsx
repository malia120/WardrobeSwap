import React, { useState, useEffect, useContext } from "react";
import "../Style/App.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Components/CartContext"; 
const server = 'http://127.0.0.1:5000';

/**
 * Component that shows listings fetched from the server.
 * Uses React inputs for UseState and useEffect for fetching data from the database.
 *
 * @returns  show listing components.
 */


export function ShowListing() {
  // Storing initial data fetched from the server

    const [initialData, setInitialData] = useState([]);
    const [listing] = useState(null);
    const {addToCart} = useContext(CartContext)

    useEffect(()=>{
      fetch(server + '/api/listing').then(
        response => response.json())
      .then(data => setInitialData(data.listings))
      .catch(error => console.error("Error fetching data:", error, error.message, error.stack))
    }, []);

    const handleAddToCart = (item) => {
      if (item) {
          addToCart(item);
          alert("Item added to cart!"); 
      }
  };
  
    return (
      <React.Fragment> 
      <div className='Card'>
        {initialData.map(item => (
        <div key={item.id} className="Cardview">
        <Link to={`/listings/${item.id}`} style={{ textDecoration: 'none' }}>
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
          </Link>
          <button className="addToCart" onClick={() => handleAddToCart(item)}> Add to Cart </button>
        </div>        
    ))}
    </div>
    </React.Fragment> 
  );
}

export default ShowListing;