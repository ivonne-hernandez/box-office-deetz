import React from 'react';
// import Modal from './Modal'
import '../styles/MovieCard.css'


class MovieCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  clickMovie = () => {
    this.props.setSelectedMovie(this.props.id);
    this.props.toggleModal(true)
  }

  render = () => {
    return(
    <article className="movieCard" onClick={() => this.clickMovie()}>
      {<img src={this.props.poster} alt={ this.props.title + ` poster`} className='movieCardPoster'/>}
      <h2>{this.props.title}</h2>
      <p>Average Rating: {Number(this.props.averageRating.toFixed(2))} / 10</p>
      <p>Release Date: {this.props.releaseDate}</p>
    </article>
  )
  }

}

// const MovieCard = ({ title, poster, backdrop, averageRating, releaseDate, overview, genres, budget, revenue, tagline, id, selectedMovie, setSelectedMovie, isModalOpen, toggleModal }) => {
//
//   const clickMovie = () => {
//     setSelectedMovie(id)
//     toggleModal(true)
//   }
//
//   return (
//     // <>
//       <article className="movieCard" onClick={() => clickMovie()}>
//         {<img src={poster} alt={ title + ` poster`} className='movieCardPoster'/>}
//         <h2>{title}</h2>
//         <p>Average Rating: {Number(averageRating.toFixed(2))} / 10</p>
//         <p>Release Date: {releaseDate}</p>
//       </article>
//       // <Modal
//       //   title={title}
//       //   poster={poster}
//       //   backdrop={backdrop}
//       //   averageRating={averageRating}
//       //   releaseDate={releaseDate}
//       //   overview={overview}
//       //   genres={genres}
//       //   budget={budget}
//       //   revenue={revenue}
//       //   tagline={tagline}
//       //   id={id}
//       //   selectedMovie={selectedMovie}
//       //   isModalOpen={isModalOpen}
//       //   toggleModal={toggleModal}
//       //   />
//     // </>
//   )
// }

export default MovieCard;
