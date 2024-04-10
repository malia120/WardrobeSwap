import React, {useContext} from "react";
import { CartContext } from "./CartContext";


export const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);

    const handleRemoveItem = () => {
      removeFromCart(item.id);
    };    

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
