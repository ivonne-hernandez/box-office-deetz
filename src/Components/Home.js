import React from 'react';
import Header from './Header';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, selectedMovie, isLoading, setSelectedMovie, toggleModal }) => {
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
          toggleModal={toggleModal}
        />
      </div>
    )
  }
}


export default Home;