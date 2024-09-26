import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import ProfileW from './pics/ProfileW.png';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Movies from './components/Movies';
import Profile from './components/Profile';
import List from './components/List';
import Subs from './components/Subs';
import Checkout from './components/Checkout';
import { useCart } from './context/CartContext';




function App(){

  const { cart } = useCart();
  const totalItems = (cart || []).reduce((sum, item) => 
      sum + item.amount, 0); // Calculate total items

  return (
    <Router>
      <h1 className = "appname">Stream List</h1>

      <nav>
        <ul>
          <NavLink to="/profile"><img className="P_icon" src={ProfileW}/></NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/subs">Subscriptions</NavLink>
          <NavLink to="/cart">Cart {totalItems}</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/about">About</NavLink>
          </ul>
       </nav>

      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={ <Home />}/>
        <Route path="/subs" element={<Subs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/list" elements={<List/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        
      </Routes>
    
    </Router>


  );
};

export default App;
