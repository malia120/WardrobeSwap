import React, { useContext } from "react";
import { CartContext } from "./CartContext";

/**
 * Component for rendering a single item in the cart.
 * 
 * This component displays the details of a item in the cart, including its title, price, and an option to remove it from the cart.
 * 
 * @component
 * @param {Object} item The item object containing details of the item.
 * @returns {JSX.Element} The JSX representation of the cart item.
 */

export const CartItem = ({ item }) => {
  // Accessing removeFromCart function from CartContext
  const { removeFromCart } = useContext(CartContext);
  /**
* Function to handle removing the item from the cart.
*/

  const handleRemoveItem = () => {
    removeFromCart(item.id);
  };

  // Rendering the cart item

  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-body'>
          <img src={`http://localhost:5000/uploads/${item.image}`} alt='image' className="cImage" />
          <div>
            <h5 className='card-title'>{item.title}</h5>
            <p className='card-text'>Price: £{item.price}</p>
            <button className="remove-button" onClick={handleRemoveItem}>Remove from Cart</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default CartItem;
