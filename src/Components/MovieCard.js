import React from 'react';

import '../styles/MovieCard.css'

const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, id }) => {
  return (
    <article className="movieCard">
      {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
      <h2>{title}</h2>
      {/* <img src={backdrop} className='movieCardBackDrop'/> */}
      <p>Average Rating: {Number(averageRating.toFixed(2))}</p>
      <p>Release Date: {releaseDate}</p>

    </article>
  )
}

export default MovieCard;
