import React from 'react'
import MovieCard from './MovieCard'

const MoviesContainer = ({ movies }) => {
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
      />
    )
  });
  return (
    <main className="MovieContainer">
      <p>This is the container!! :) </p>
      { movieCards }
    </main>
  )
}

export default MoviesContainer;
