import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';

const MoviesContainer = ({ movies, toggleFavorite }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster={movie.poster_path}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
        backdrop={movie.backdrop_path}
        id={movie.id}
        key={movie.id}
        toggleFavorite={toggleFavorite}
        favorite={movie.favorite}
      />
    )
  });
  
  return (
    <main className="movieContainer">
      {movieCards}
    </main>
  );
}

export default MoviesContainer;
