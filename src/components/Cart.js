import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import reel from '../pics/reel.png';

function Cart() {

const navigate = useNavigate();
const [cart, setCart] = useState([]);

const calculateEachPrice = (item) => item.amount * item.price;
  
const calculateTotalPrice = () => {
  return cart.reduce((total, item) => total + calculateEachPrice(item), 0);
};


  return (<div>

  <h1>Your Cart</h1>

  {cart.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((item, index) => (
          <tr key={index}>
            <td>{item.service}</td>
            <td>${calculateEachPrice(item)}</td>
            <td>{item.amount}</td>
          </tr>
        ))}

        <tr className='cart-total'>
          <td colSpan="2">Total</td>
          <td>${calculateTotalPrice()} USD</td>
        </tr>
      </tbody>
    </table>
    ) : (
    <p>Your cart is empty</p>
  )}


    <div>
      <button onClick={() => navigate('/subscriptions')}>Keep Shopping</button>
      <button>Checkout</button>
    </div>


    </div>);
};

export default Cart;