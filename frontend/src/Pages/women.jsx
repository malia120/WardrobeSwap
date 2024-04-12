import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { CartContext } from "../Components/CartContext";
const server = 'http://127.0.0.1:5000';
/**
 * page shows items in the women's section
 * this components grabs data from the serber realated to women's items and shows them
 * user can view details of each item, add items to their cart, and browse to the item's page.
 * @components
 * @returns 
 */

function Men() {
  //grabbing initial data and accesing addToCart function from CartContext
  console.log("Men component rendered");
  const [initialData, setInitialData] = useState([]);
  const { addToCart } = useContext(CartContext);
  // grabbing data from the server when the component mounts
  useEffect(() => {
    fetch(server + '/api/listing')
      .then(response => response.json())
      .then(data => setInitialData(data.listings))
      .catch(error => console.error("Error fetching data:", error, error.message, error.stack));
  }, []);
  //filtering items for womens section
  const menItems = initialData.filter(item => item.category === "Women");
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
            <h1>Welcome to the Womens's section</h1>
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