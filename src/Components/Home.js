import React from 'react';
import Header from './Header';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, selectedMovie, isLoading, setSelectedMovie, resetSelectedMovie }) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <div>
        <MoviesContainer movies={movies}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          resetSelectedMovie={resetSelectedMovie}
        />
      </div>
    )
  }
}


export default Home;