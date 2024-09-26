import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';///access current url
import axios from 'axios';//http (api) requests
import '../App.css';
import reel from '../pics/reel.png';



const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const apiURL = `https://api.themoviedb.org/3`;


//returns promise and use of await
const fetchMovies = async (input) => {
  try{
    //figured out how to use backticks!
    const response = await axios.get(`${apiURL}/search/movie`,{
      params:{api_key:apiKey, query:input,},
    });
    console.log(response.data)
    return response.data.results;
  }catch(error){
    console.error("Error fetching data:", error);
    throw error;
  }
};



function Movies() {

  const [movieSet, setMovieSet] = useState([]);

  //url
  const location = useLocation();
  const input = new URLSearchParams(location.search).get('input');


  //load
  useEffect(()=>{
    const results = JSON.parse(localStorage.getItem('movieSet')) || [];
    setMovieSet(results);
},[]);


//fetch
    useEffect(() => {
        const getMovieSet = async () => {
            try {
                const movieInfo = await fetchMovies(input);
                setMovieSet(movieInfo);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };
        if(input){
          getMovieSet();
        }
    }, [input]);

//update
    useEffect(() => {
      if (movieSet.length>0) {
          localStorage.setItem('movieSet', JSON.stringify(movieSet));
      }
  }, [movieSet]);


return (<div className='movies'>
  <ul>
    {movieSet.map(movie => (

      <li key={movie.id}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
      </li>

    ))}
  </ul>
</div>);
}
  
  export default Movies;