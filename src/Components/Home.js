import React from 'react';
import Header from './Header';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, selectedMovie, isModalOpen, isLoading, setSelectedMovie, toggleModal }) => {
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  } else {
    return (
      <div>
        <Header />
        <MoviesContainer movies={movies}
          selectedMovie={selectedMovie}
          isModalOpen={isModalOpen}
          setSelectedMovie={setSelectedMovie}
          toggleModal={toggleModal}
        />
      </div>
    )
  }
}


export default Home;