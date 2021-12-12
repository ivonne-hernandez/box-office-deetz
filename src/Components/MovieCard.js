import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/MovieCard.css';

const MovieCard = ({ title, poster, averageRating, releaseDate, id, backdrop, addFavorite }) => {
  let navigate = useNavigate();
 
  return (
    <article id ={id} className="movieCard" onClick={() => navigate(`/${id}`)}>
      {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
      <h2>{title}</h2>
      <p className="movieCardRating">Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
      <p className="movieCardReleaseDate">Release Date: {releaseDate}</p>
      <button 
        onClick={() => {
          const newFavoriteMovie = {
            id: id,
            poster_path: poster,
            backdrop_path: backdrop,
            title: title,
            average_rating: averageRating,
            release_date: releaseDate
          }
          
          addFavorite(newFavoriteMovie);
       }}>
        Test Post Favorite
      </button>
    </article>
  )
}

export default MovieCard;
