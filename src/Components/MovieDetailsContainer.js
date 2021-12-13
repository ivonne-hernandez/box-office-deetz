import React from 'react';
import MovieDetails from './MovieDetails';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

const MovieDetailsContainer = ({ addFavorite, deleteFavorite }) => {
  let navigate = useNavigate();
  let { id } = useParams();
  
  const closeMovieDetails = () => {
    navigate("/");
  }
  
  return (
    <MovieDetails
      selectedMovie={id}
      closeMovieDetails={closeMovieDetails}
      addFavorite={addFavorite}
      deleteFavorite={deleteFavorite}
    />
  );
}

export default MovieDetailsContainer;