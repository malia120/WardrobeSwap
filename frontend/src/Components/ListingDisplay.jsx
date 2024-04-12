import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../Components/CartContext";
/**
 * Component for displaying details of a specific listing.
 * 
 * This fetches and displays details of a listing based on the listing ID.
 * It allows users to view information about the listing such as title, description, category, price, and date created.
 * Users can also add the listing to their cart.
 * 
 * @component
 * @param {Object} listingProp - The listing object to display details
 * @returns {JSX.Element} The JSX representation of the listing display component.
 */

const ListingDisplay = ({ listingProp }) => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        // Fetch listing details from the server based on the provided ID

        fetch(`http://127.0.0.1:5000/api/listing/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch listing');
                } return response.json();
            })
            .then(data => setListing(data))
            .catch(error => setError(error.message));

    }, [id]);

    /**
     * Handles adding the current listing to the cart.
     */
    const handleAddToCart = () => {
        if (listing) {
            addToCart(listing);
            alert("Item added to cart!");
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!listing) {
        return <div>Loading...</div>;
    }
    // Render listing details

    return (
        <React.Fragment>
            <Navbar />
            <div className="App">
                <div className="search-bar-holder">
                    <SearchBar />
                </div>
                <div className="form-container">
                    <div className="sell-heading">
                        <h1>Have a look!</h1>
                    </div>
                    <div className="listing-container">
                        <div className="listing-image-container">
                            <img
                                src={`http://localhost:5000/uploads/${listing.image}`}
                                alt="image"
                                className="cImage"
                            />
                        </div>

                        <div className="listing-info">
                            <p>Item Number: {listing.id}</p>
                            <p>Title: {listing.title}</p>
                            <p>Description: {listing.description}</p>
                            <p>Category: {listing.category}</p>
                            <p>Price: £{listing.price}</p>
                            <p>Date Created: {listing.date_created}</p>
                            <button className="addToCart" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default ListingDisplay