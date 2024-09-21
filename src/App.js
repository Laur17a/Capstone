import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import company_logo from './pics/company_logo.png'; /*needed to be in src*/
import ProfileW from './pics/ProfileW.png';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Movies from './components/Movies';
import Profile from './components/Profile';
import List from './components/List';
import Subs from './components/Subs';
import axios from 'axios';


function App(){

  

  return (
    <Router>
      <h1 className = "appname">Stream List</h1>

      <nav>
        <ul>
          <NavLink to="/profile"><img className="P_icon" src={ProfileW}/></NavLink>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/subs">Subscriptions</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/about">About</NavLink>
          </ul>
       </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/subs" element={<Subs/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/list" elements={<List/>}/>
      </Routes>

      <footer>
        <img src={company_logo} alt='Company logo'/>
      </footer>
    
    </Router>


  );
}

export default App;
