import React from 'react'
import MovieDetails from './MovieDetails' 

const MovieDetailContainer = ({ isModalOpen, selectedMovie, toggleModal }) => {
    
    return (
            <MovieDetails
            selectedMovie={selectedMovie}
            toggleModal={toggleModal}
            />
            )
    
}

export default MovieDetailContainer