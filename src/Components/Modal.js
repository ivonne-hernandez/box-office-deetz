import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css'

const Modal = ({ title, poster, backdrop, averageRating, releaseDate, id, isModalOpen, toggleModal, selectedMovie }) => {
  if (isModalOpen && id === selectedMovie) {
    return ReactDOM.createPortal(
      <div className="Modal" onClick={() => toggleModal(false)}>
       {selectedMovie} 
      </div>,
      document.getElementById('modal-container')
    )
  } else {
    return null; 
  }
}

export default Modal;