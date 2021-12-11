import React from 'react';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, isLoading, setSelectedMovie, addFavorite  }) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <div>
        <MoviesContainer 
          movies={movies}
          setSelectedMovie={setSelectedMovie}
          addFavorite={addFavorite}
        />
      </div>
    )
  }
}


export default Home;