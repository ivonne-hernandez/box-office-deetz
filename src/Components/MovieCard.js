import React from 'react';

import '../styles/MovieCard.css'

const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, id }) => {
  return (
    <article className="movieCard">
      <h2>{title}</h2>
      {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
      {/* <img src={backdrop} /> */}
      <p>Average Rating: {Number(averageRating.toFixed(2))}</p>
      <p>Release Date: {releaseDate}</p>

    </article>
  )
}

export default MovieCard;
