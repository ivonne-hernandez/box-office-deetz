import React from 'react';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, toggleFavorite, isLoading }) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <div>
        <MoviesContainer 
          movies={movies}
          toggleFavorite={toggleFavorite}
        />
      </div>
    )
  }
}


export default Home;