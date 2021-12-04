import React from 'react';
import Modal from './Modal'
import '../styles/MovieCard.css'

const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, id, selectedMovie, setSelectedMovie, isModalOpen, toggleModal }) => {

  const clickMovie = () => {
    setSelectedMovie(id)
    toggleModal(true)
  }

  return (
    <>
      <article className="movieCard" onClick={() => clickMovie()}>
        {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
        <h2>{title}</h2>
        {/* <img src={backdrop} className='movieCardBackDrop'/> */}
        <p>Average Rating: {Number(averageRating.toFixed(2))}</p>
        <p>Release Date: {releaseDate}</p>
      </article>
      <Modal
        title={title}
        poster={poster}
        backdrop={backdrop}
        averageRating={averageRating}
        releaseDate={releaseDate}
        id={id}
        selectedMovie={selectedMovie}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        />
    </>
  )
}

export default MovieCard;
