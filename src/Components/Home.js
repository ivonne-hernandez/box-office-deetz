import React from 'react';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, addFavorite, isLoading, deleteFavorite }) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <div>
        <MoviesContainer 
          movies={movies}
          addFavorite={addFavorite}
          deleteFavorite={deleteFavorite}
        />
      </div>
    )
  }
}


export default Home;