import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  /*https://bobbyhadz.com/blog/react-onclick-redirect*/
import search from '../pics/search.png'; /*freaking dots */
import add_boxB from '../pics/add_boxB.png';

function Home() {

  const [input, setInput] = useState (' ');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();//prevents immeadiate clear
    console.log(input);//logs input
    e.currentTarget.reset(); //resets input field
    setInput(''); //resets console
  };

  const addNewList = () => {
    navigate('/list');
  };



    return (
      <div className="homepage">

        <div className="homepage-notify">
          <label>Now streaming... {input}</label>
        </div>


        <form className="home-search" onClick={handleClick}>

          <div >
            <img className="home-icon" src={search} alt="search"/>         
            <input id="input" placeholder ="Looking for . . . ." onChange={e => setInput(e.target.value)}></input>
          </div>

          <button>Search</button>

        </form>
      

      <div className="home-list">
        <h2>My Lists</h2>
        <button onClick={addNewList}><img src={add_boxB} alt="Add lists"/></button>
      </div>


      </div>

    );
  }
  
  export default Home;