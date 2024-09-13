import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  /*https://bobbyhadz.com/blog/react-onclick-redirect*/
import search from '../pics/search.png'; /*freaking dots */
import add_boxB from '../pics/add_boxB.png';
import List from './List';



function Home() {

  const [input, setInput] = useState (' ');//search bar
  const [title, setTitle] = useState(''); //list name
  const [edit, setEdit] = useState(false); //edit list name/stuff
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);//array of all movies/searches
  


  useEffect(()=>{
      const searchedM = (JSON.parse(localStorage.getItem('movies'))) || [];
      setMovies(searchedM);
  },[]);
  

  const addMovie = (movie) => {
    const newMovie = [...movies, {title:movie}];
    setMovies(newMovie);

    localStorage.setItem('movies', JSON.stringify(newMovie));
  };


  const removeMovie = (item) => { /*https://www.geeksforgeeks.org/how-to-delete-an-item-from-state-array-in-reactjs/#*/
    const updateMovies = movies.filter(movie => movie !== item);
    setMovies(updateMovies);

    localStorage.setItem('movies', JSON.stringify(updateMovies));
   };

   
   const editThis = () => {
    setEdit(!edit);
   }


  const handleSubmit = (e) => {
    e.preventDefault();//prevents immeadiate clear
    addMovie(input);
    console.log(input);//logs input
    setInput(''); //resets console
  };


    return (
      <div className="homepage">


        <form className="home-search" onSubmit={handleSubmit}>

          <div >
            <img className="home-icon" src={search} alt="search"/>         
            <input id="input" placeholder ="Looking for . . . ." value = {input} onChange={e => setInput(e.target.value)}></input>
          </div>

          <button>Search</button>

        </form>



        <div className="homepage-notify">

          <div>
            <input placeholder='Now Streaming...' onChange={(e) => setTitle(e.target.value)} readOnly={!edit}></input>
            <button onClick={editThis}><i class="fa fa-pencil" aria-hidden="true"/>{edit ? 'Save':'Edit'}</button>
          </div>
            
          <ul>{movies.map((movie,index)=>(<li key={index}>{movie.title} 

            <button onClick={() => removeMovie(movie)}><i class="fa fa-trash" aria-hidden="true"/></button>
            <button><i class="fa fa-play-circle" aria-hidden="true"/></button>

            </li>))}</ul>

        </div>
      
      

      <div className="home-list">
        <h2>My Lists</h2>
        <button onClick={()=>navigate('/list')}><img src={add_boxB}/></button>
      </div>


      </div>

    );
  }
  
  export default Home;