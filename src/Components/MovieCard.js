import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/MovieCard.css'

const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, overview, genres, budget, revenue, tagline, id, selectedMovie, setSelectedMovie, isModalOpen, toggleModal }) => {

  let navigate = useNavigate()

  const clickMovie = () => {
    setSelectedMovie(id)
    // toggleModal(true)
    // navigate("/test")
  }

  return (
      <article className="movieCard" onClick={() => clickMovie()}>
        {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
        <h2>{title}</h2>
        <p>Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
        <p>Release Date: {releaseDate}</p>
      </article>
  )
}

export default MovieCard;
