import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MoviesContainer.css';

const MoviesContainer = ({ movies, addFavorite, deleteFavorite }) => {
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
        favorite={movie.favorite}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
      />
    )
  });
  
  return (
    <main className="movie-container">
      {movieCards}
    </main>
  );
}

export default MoviesContainer;
