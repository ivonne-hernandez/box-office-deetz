import React from 'react'
import MovieCard from './MovieCard'

import '../styles/MoviesContainer.css'

const MoviesContainer = ({ movies, selectedMovie, setSelectedMovie, isModalOpen, toggleModal }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
        id={movie.id}
        key={movie.id}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    )
  });
  return (
    <main className="movieContainer">
      { movieCards }
    </main>
  )
}

export default MoviesContainer;
