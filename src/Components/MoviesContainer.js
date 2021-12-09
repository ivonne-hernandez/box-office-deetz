import React from 'react'
import MovieCard from './MovieCard'

import '../styles/MoviesContainer.css'

const MoviesContainer = ({ movies, selectedMovie, setSelectedMovie, resetSelectedMovie }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
        overview={movie.overview}
        genres={movie.genres}
        budget={movie.budget}
        revenue={movie.revenue}
        tagline={movie.tagline}
        id={movie.id}
        key={movie.id}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        resetSelectedMovie={resetSelectedMovie}
      />
    )
  });
  return (
    <main className="movieContainer">
      
       {movieCards}
    </main>
  )
}

export default MoviesContainer;
