import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css'

const Modal = ({
  title,
  poster,
  backdrop,
  averageRating,
  releaseDate,
  overview,
  genres,
  budget, 
  revenue, 
  tagline,
  id,
  selectedMovie,
  isModalOpen,
  toggleModal
}) => {
  const myStyle = {
    background: backdrop
  }

  if (isModalOpen && selectedMovie === id) {
    return ReactDOM.createPortal(
      <div className = "modal" title={title}>
        <article className="modal-window" style={myStyle}>
          <img src={backdrop} className="modal-backdrop-img" alt={title} />
          <img src={poster} alt={title + ` poster`} className="modal-poster"/>
          <h2>{title}</h2>
          <p>Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
          <p>Release Date: {releaseDate}</p>
          <p>Overview: {overview}</p>
          <p>Genres: {genres}</p>
          <p>Budget: {budget}</p>
          <p>Revenue: {revenue}</p>
          <p>Tagline: {tagline}</p>
          <button onClick={() => toggleModal(false)}>Close</button>
        </article>
      </div>,
      document.getElementById('modal-container')
    )
  } else {
    return null;
  }


}

export default Modal
