import React from 'react'
import Modal from './Modal' 

const ModalContainer = ({ isModalOpen, selectedMovie, toggleModal }) => {
    if (isModalOpen && selectedMovie) {
        return (
            <Modal
            selectedMovie={selectedMovie}
            toggleModal={toggleModal}
            />
        )
    } else {
        return null;
    }
}

export default ModalContainer