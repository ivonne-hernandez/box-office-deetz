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
    backgroundImage: `url(${backdrop})`
  }

  if (isModalOpen && selectedMovie === id) {
    return ReactDOM.createPortal(
      <div className="modal">
          <article className="modal-window">
            <div className="modal-backdrop-img" style={myStyle}>
            </div>
            <img src={poster} alt={title + ` poster`} className="modal-poster"/>
            <div className="modal-poster movie-content">
              <div className="modal-title">
                <h3>{title}</h3>
              </div>
              <p className="modal-p"><b>Average Rating:</b> {Number(averageRating.toFixed(2))} / 10</p>
              <p className="modal-p"><b>Release Date:</b> {releaseDate}</p>
              <p className="modal-p"><b>Overview:</b> {overview}</p>
              <p className="modal-p"><b>Genres:</b> {genres}</p>
              <p className="modal-p"><b>Budget:</b> {budget}</p>
              <p className="modal-p"><b>Revenue:</b> {revenue}</p>
              <p className="modal-p"><b>Tagline:</b> {tagline}</p>
              <button onClick={() => toggleModal(false)}>Close</button>
            </div>
        </article>
      </div>,
      document.getElementById('modal-container')
    )
  } else {
    return null;
  }


}

export default Modal
