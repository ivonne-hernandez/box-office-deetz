import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/MovieCard.css';
import star from '../styles/star.svg';
import faveStar from '../styles/faveStar.svg';

const MovieCard = ({ title, poster, averageRating, releaseDate, id, backdrop, favorite, addFavorite, deleteFavorite }) => {
  let navigate = useNavigate();
 
  return (
    <article id ={id} className="movie-card">
      <div className="star-container">
        <img 
          alt="favoriting star"
          src={favorite ? faveStar: star} 
          className="favorite-button"
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
      <img src={poster} 
        alt={ title + ` poster`}  
        className='movieCardPoster'
        onClick={() => navigate(`/${id}`)} 
      />
      <h2>{title}</h2>
      <p className="movie-card-rating">Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
      <p className="movie-card-release-date">Release Date: {releaseDate}</p>
    </article>
  )
}

export default MovieCard;
