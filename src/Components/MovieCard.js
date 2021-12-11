import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/MovieCard.css';

const MovieCard = ({ title, poster, averageRating, releaseDate, id, addFavorite }) => {
  let navigate = useNavigate();
  let sampleMovie = {
    id: 694919,
    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    title: "Money Plane",
    average_rating: 6.625,
    release_date: "2020-09-29"
  }

  return (
    <article id ={id} className="movieCard" onClick={() => navigate(`/${id}`)}>
      {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
      <h2>{title}</h2>
      <p className="movieCardRating">Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
      <p className="movieCardReleaseDate">Release Date: {releaseDate}</p>
      <button onClick={() => addFavorite(sampleMovie)}>Test Post Favorite</button>
    </article>
  )
}

export default MovieCard;
