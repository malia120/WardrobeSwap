import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ListingDisplay() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/listing/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch listing');
            } return response.json();
            })
            .then(data => setListing(data))
            .catch(error => setError(error.message));
            
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!listing) {
        return <div>Loading...</div>;
      }

    return (

        <div className="listingDisplay">
          <h1>Listing Detail</h1>
            <p>ID: {listing.id}</p>
            <p>Title: {listing.title}</p>
            <img src={`http://localhost:5000/uploads/${listing.image}`} alt='image' className="cImage" />
            <p>Description: {listing.description}</p>
            <p>Category: {listing.category}</p>
            <p>Price: £{listing.price}</p>
            <p>Date Created: {listing.date_created}</p>
        </div>
    )

}

export default ListingDisplay