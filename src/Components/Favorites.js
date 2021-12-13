import React from 'react';
import MovieCard from './MovieCard';

const Favorites = ({ movies, addFavorite, isLoading, deleteFavorite }) =>  {
    const favoriteMovies = movies.filter((movie) => {
        return movie.favorite
    })

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
        <main className="movie-container">
            {favoriteMovieCards.length === 0 ? <p className="no-favorites-p">Looks like there aren't any Favorites Yet - Click the Star Icon on a Movie to Add it to Your Favorites List!</p> : favoriteMovieCards}
        </main>
    )
}

export default Favorites