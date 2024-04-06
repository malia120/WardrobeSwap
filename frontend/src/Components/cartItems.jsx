import React from 'react';

export const CartItem = ({ item }) => {
    

    return (
        <div className='cartItem'>
              <img src={`http://localhost:5000/uploads/${item.image}`} alt='image' className="cImage" />
        <div>
            <h3>{item.title}</h3>
            <p>Price: £{item.price}</p>
      </div>
    </div>
    )
}
export default CartItem;
