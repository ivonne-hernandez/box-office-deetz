import React from 'react';
import MoviesContainer from './MoviesContainer';

const Home = ({ movies, isLoading, setSelectedMovie }) => {
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
        />
      </div>
    )
  }
}


export default Home;