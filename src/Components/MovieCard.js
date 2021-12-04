import React from 'react';

import '../styles/MovieCard.css'
import Modal from './Modal';

const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, id, isModalOpen, toggleModal, selectedMovieId, setSelectedMovieId }) => {
  const handleClick = () => {
    setSelectedMovieId(id);
    toggleModal(true);
  }

  return (
    <>
      <article className="movieCard" onClick={() => handleClick()} >
        <img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>
        <h2>{title}</h2>
        {/* <img src={backdrop} alt={title + ` poster`} className='movieCardBackDrop'/> */}
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
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        selectedMovieId={selectedMovieId}
      />
    </>
  )
}

export default MovieCard;
