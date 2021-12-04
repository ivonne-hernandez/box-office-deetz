import React from 'react'
import MovieCard from './MovieCard'

import '../styles/MoviesContainer.css'

const MoviesContainer = ({ movies, isModalOpen, toggleModal, selectedMovieId, setSelectedMovieId }) => {
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
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        selectedMovieId={selectedMovieId}
        setSelectedMovieId={setSelectedMovieId}
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
