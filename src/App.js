
/*import React,{useEffect, useState}  from "react";
import './App.css';
import SearchIcon from'./search.svg';
import MovieCard from "./MovieCard";
// fdc54778
const  API_URL =   "http://www.omdbapi.com/?apikey=fdc54778";

const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &S=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }

 
  useEffect(() => {
   searchMovies('Spiderman');
  }, []);
  
  return (
    
    <div className="app">
      <h1>Movie Application</h1>
     

      <div className="search">
      <input
        placeholder="Search for Movies "
        value= {searchTerm} 
        
        onChange = {(e) => setSearchTerm(e.target.value)}
      />
      <img src= {SearchIcon} alt="search" 
      onClick= {()=> searchMovies(searchTerm)}/>

    </div>

      {
        movies?.length > 0
        ?(
          <div className="container">
          {movies.map((movie) =>(
          <MovieCard movie = {movie} />
          ))}
          </div>
        ) : (
          <div className="empty">
          <h2>No movies found</h2>
          </div>
        )


      }
    </div>
    

      
      
  );
}

export default App;*/




import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Movie Application</h1><br></br>

      <h2>Unlimited movies, TV shows, and more.<br></br>
Watch anywhere and anytime</h2>
 <div className="tv">


 </div>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
