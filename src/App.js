import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import company_logo from './pics/company_logo.png'; /*needed to be in src*/
import homeW from './pics/homeW.png';
import homeB from './pics/homeB.png';
import cartW from './pics/cartW.png';
import cartB from './pics/cartB.png';
import MoviesW from './pics/MoviesW.png';
import MoviesB from './pics/MoviesB.png';
import aboutW from './pics/aboutW.png';
import aboutB from './pics/aboutB.png';
import ProfileW from './pics/ProfileW.png';
import ProfileB from './pics/ProfileB.png';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Movies from './components/Movies';
import Profile from './components/Profile';
import List from './components/List';



function App(){
  return (
    <Router>
      <h1 className = "appname">Stream List</h1>

      <nav>
        <ul>
          <NavLink to="/profile"><img className="P_icon" src={ProfileW}/></NavLink>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/about">About</NavLink>
          </ul>
       </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
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
