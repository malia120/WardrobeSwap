import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { CartContext } from "../Components/CartContext";
const server = 'http://127.0.0.1:5000';
/**
 *  page component for showing items in the mens section
 *  this component grabs data from the server related to ments items and shows them.
 *  users can see details of each item, add items to their car, and browse to the items page
 * 
 * @component
 * @returns {JSX.Element} the JSX depiction of the mens selection page
 */

function Men() {
  // grabing initial data and accesing addToCart fucntion from Cart context
  console.log("Men component rendered");
  const [initialData, setInitialData] = useState([]);
  const { addToCart } = useContext(CartContext);
  //grabing data from the server when the components mounts
  useEffect(() => {
    fetch(server + '/api/listing')
      .then(response => response.json())
      .then(data => setInitialData(data.listings))
      .catch(error => console.error("Error fetching data:", error, error.message, error.stack));
  }, []);
  //filtering items for ments section
  const menItems = initialData.filter(item => item.category === "Men");
  //function to control adding items to cart
  const handleAddToCart = (item) => {
    if (item) {
      addToCart(item);
      alert("Item added to cart!");
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="search-bar-holder">
          <SearchBar />
        </div>
        <div className="form-container">
          <div className="sell-heading">
            <h1>Welcome to the Men's section</h1>
          </div>
        </div>
        <div className='Card'>
          {menItems.map(item => (
            <div key={item.id} className="Cardview">
              <Link to={`/listings/${item.id}`} style={{ textDecoration: 'none' }}>
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
              </Link>
              <button className="addToCart" onClick={() => handleAddToCart(item)}> Add to Cart </button>
            </div>
          ))}
        </div>
      </div>
      <footer />
    </React.Fragment>
  );
}

export default Men;