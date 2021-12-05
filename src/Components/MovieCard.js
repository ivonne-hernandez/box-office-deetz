import React from 'react';
import Modal from './Modal'
import '../styles/MovieCard.css'

const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, overview, genres, budget, revenue, tagline, id, selectedMovie, setSelectedMovie, isModalOpen, toggleModal }) => {

  const clickMovie = () => {
    setSelectedMovie(id)
    toggleModal(true)
  }

  return (
    <>
      <article className="movieCard" onClick={() => clickMovie()}>
        {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
        <h2>{title}</h2>
        <p>Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
        <p>Release Date: {releaseDate}</p>
      </article>
      {this.props.isModalOpen && this.props.selectedMovie === id &&
          <Modal
            // title={title}
            // poster={poster}
            // backdrop={backdrop}
            // averageRating={averageRating}
            // releaseDate={releaseDate}
            // overview={overview}
            // genres={genres}
            // budget={budget}
            // revenue={revenue}
            // tagline={tagline}
            id={id}
            selectedMovie={selectedMovie}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            />
      }
    </>
  )
}

export default MovieCard;
