import React from 'react';
import MovieCard from './MovieCard';
import star from '../styles/star.svg';
import Favorite from '../styles/Favorite.css';

const Favorites = ({ movies, addFavorite, deleteFavorite }) =>  {
  const favoriteMovies = movies.filter(movie => movie.favorite)

  const favoriteMovieCards = favoriteMovies.map(movie => {
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

  return(
    !favoriteMovieCards.length ? 
      <div className="no-favorites">
        <span className="no-favorites-p1">Click the </span>
        <img src={star} className="no-favorites-star"/> 
        <span className="no-favorites-p2"> icon on a Movie to add it to your Favorites list.</span>
      </div>
      : <main className="movie-container fave-movie-container">
          {favoriteMovieCards}
        </main>
  )
}

export default Favorites;