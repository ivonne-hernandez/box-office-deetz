import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/MovieCard.css';
import star from '../styles/star.svg'

const MovieCard = ({ title, poster, averageRating, releaseDate, id, backdrop, favorite, addFavorite, deleteFavorite }) => {
  let navigate = useNavigate();
 
  return (
    <article id ={id} className="movie-card">
      <div>
        <img src={star} className="favorite-button"
          onClick={() => {
            if (favorite) {
              deleteFavorite(id);
            } 
            else {
              addFavorite({id: id});
            }
          }}
        />
      </div>
      {<img src={poster} alt={ title + ` poster`}  onClick={() => navigate(`/${id}`)} className='movieCardPoster'/>}
      <h2>{title}</h2>
      <p className="movie-card-rating">Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
      <p className="movie-card-release-date">Release Date: {releaseDate}</p>
    </article>
  )
}

export default MovieCard;
