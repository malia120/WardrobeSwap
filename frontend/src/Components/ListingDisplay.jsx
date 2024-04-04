import React from "react";
import { useParams, Link } from "react-router-dom";

function ListingDetail() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/listing/${id}`)
            .then(response => response.json())
            .then(data => setListing(data.listing))
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);

    return (

        <div className="listingDisplay">
          <h1>Listing Detail</h1>
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <p>Price: £{item.price}</p>
            <p>Date Created: {item.date_created}</p>
        </div>
    )

}

export default listingDisplay