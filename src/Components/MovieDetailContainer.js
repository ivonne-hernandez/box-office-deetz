import React from 'react';
import MovieDetails from './MovieDetails';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

const MovieDetailContainer = ({ resetSelectedMovie }) => {
  let navigate = useNavigate();
  let { id } = useParams();
  
  const closeMovieDetails = () => {
    resetSelectedMovie();
    navigate("/");
  }
  
  return (
    <MovieDetails
      selectedMovie={id}
      closeMovieDetails={closeMovieDetails}
    />
  );
}

export default MovieDetailContainer;