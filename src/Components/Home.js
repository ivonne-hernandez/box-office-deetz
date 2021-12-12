import React from 'react';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, addFavorite, isLoading }) => {
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
        />
      </div>
    )
  }
}


export default Home;