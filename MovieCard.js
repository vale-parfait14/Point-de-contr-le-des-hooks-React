// src/MovieCard.js
import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
