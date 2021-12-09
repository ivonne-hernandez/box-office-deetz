import React from 'react';
import MovieDetails from './MovieDetails';

const MovieDetailContainer = ({ selectedMovie, resetSelectedMovie }) => {
    
  return (
    <MovieDetails
    selectedMovie={selectedMovie}
    resetSelectedMovie={resetSelectedMovie}
    />
  );
}

export default MovieDetailContainer;