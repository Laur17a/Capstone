import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../App.css';
import reel from '../pics/reel.png';

function Cart() {

const { cart, removeFromCart } = useCart();
const navigate = useNavigate();
//const [cart, setCart] = useState([]);

if (!cart || cart.length === 0) {
  return <div className='cart-empty'>Your cart is empty.
              <img src={reel}/></div>;
}


return (<div className='cart'>

  <h1>Your Cart</h1>

      <ul className='cart-items'>

        {cart.map((item, index) => (
          <li key={index} className='cart-item'>

            <div className='cart-item-info'>
              <h3>{item.service}</h3> {/* Display subscription name from data.js */}
              <p>Price: ${item.price.toFixed(2)}</p> {/* Display item price */}
              <p>Quantity: {item.amount}</p> {/* Display item quantity */}
            </div>

            <button onClick={() => removeFromCart(item.id)} className='remove-button'>
              <i className="fa fa-trash" aria-hidden="true"/>
            </button>

          </li>
        ))}

      </ul>


    <div className='cart-buttons'>
      <button onClick={() => navigate(`/subs`)}>Keep Shopping</button>
      <button onClick={() => navigate(`/checkout`)}>Checkout</button>
    </div>


</div>);
};

export default Cart;