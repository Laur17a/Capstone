import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  /*https://bobbyhadz.com/blog/react-onclick-redirect*/
import search from '../pics/search.png'; /*freaking dots */



function Home() {

  const [input, setInput] = useState (' ');//search bar
  const [title, setTitle] = useState(''); //list name
  const [edit, setEdit] = useState(false); //edit list name/stuff

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);//array of all movies/searches

  
//list name = title
  useEffect(()=>{
    const titleUsed = (JSON.parse(localStorage.getItem('title'))) || [];
    setTitle(titleUsed);
},[]);


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
    localStorage.setItem('title', JSON.stringify(title));
   }


  const handleSubmit = (e) => {
    e.preventDefault();//prevents immeadiate clear
    addMovie(input);
    console.log(input);//logs input
    navigate(`/movies?input=${input}`);//go to movies with this.
    setInput(''); //resets console
  };



  
    return (
      <div className="homepage">

{/*Search*/}

        <form className="home-search" onSubmit={handleSubmit}>

          <div>
            <img className="home-icon" src={search} alt="search"/>         
            <input id="input" placeholder ="Looking for . . . ." value = {input} onChange={e => setInput(e.target.value)}></input>
          </div>

          <button>Search</button>

        </form>



{/*List*/}

        <div className="homepage-notify">
          <div className='homepage-notify-title'>
            <button onClick={editThis}>{edit ? <i class="fa fa-save" aria-hidden="true"/>:<i className="fa fa-edit" aria-hidden="true"/>}</button>
            <input id="title"  value = {title} placeholder='Now Streaming...' onChange={e => setTitle(e.target.value)} readOnly={!edit}></input>
          </div>
            
          <table>
            <tbody>
            {movies.map((movie,index)=>(
              <tr key={index}>
                <td>{movie.title}</td>
                <td className='homepage-notify-btn'><button onClick={() => removeMovie(movie)}><i className="fa fa-trash-o" aria-hidden="true"/></button></td>
                <td className='homepage-notify-btn'><button><i className="fa fa-play-circle" aria-hidden="true"/></button></td>
              </tr>
            ))}
            </tbody>
            </table>
        </div>
      
    
      </div>

    );
  }
  
  export default Home;