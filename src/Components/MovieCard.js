import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/MovieCard.css';

const MovieCard = ({ title, poster, averageRating, releaseDate, id, backdrop, favorite, addFavorite, deleteFavorite }) => {
  let navigate = useNavigate();
 
  return (
    <article id ={id} className="movieCard" onClick={() => navigate(`/${id}`)}>
      {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
      <h2>{title}</h2>
      <p className="movieCardRating">Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
      <p className="movieCardReleaseDate">Release Date: {releaseDate}</p>
      <button 
        onClick={() => {
          if (favorite) {
            deleteFavorite(id);
          } 
          else {
            addFavorite({id: id});
          }
       }}>
        Test Post Favorite
      </button>
    </article>
  )
}

export default MovieCard;
