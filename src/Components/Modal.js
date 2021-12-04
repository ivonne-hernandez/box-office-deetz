import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css'

const Modal = ({
  title,
  poster,
  backdrop,
  averageRating,
  releaseDate,
  id,
  selectedMovie,
  isModalOpen,
  toggleModal
}) => {

  if (isModalOpen && selectedMovie === id) {
    return ReactDOM.createPortal(
      <div className = "modal" title={title}>
        <h2>{title}</h2>
        <button onClick={() => toggleModal(false)}>Close</button>

      </div>,
      document.getElementById('modal-container')
    )
  } else {
    return null;
  }


}

export default Modal
