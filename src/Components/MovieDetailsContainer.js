import React from 'react';
import MovieDetails from './MovieDetails';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

const MovieDetailsContainer = ({ resetSelectedMovie }) => {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(`useParams:`, useParams())
  
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

export default MovieDetailsContainer;