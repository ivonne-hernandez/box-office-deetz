import React from 'react';

const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, id }) => {
  return (
    <article className="movieCard">
      <h2>{title}</h2>
      {/* <img src={poster}/> */}
      {/* <img src={backdrop} /> */}
      <p>Average Rating: {Number(averageRating.toFixed(2))}</p>
      <p>Release Date: {releaseDate}</p>

    </article>
  )
}

export default MovieCard;
