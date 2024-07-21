// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through use of dream-sharing technology.',
      posterUrl: 'https://via.placeholder.com/150',
      rating: 8.8
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterUrl: 'https://via.placeholder.com/150',
      rating: 8.6
    },
    // Ajoutez d'autres films ici
  ]);

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating >= (rating ? rating : 0)
    );
  });

  const addMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'Description',
      posterUrl: 'https://via.placeholder.com/150',
      rating: 7.5
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter title={title} setTitle={setTitle} rating={rating} setRating={setRating} />
      <button onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
