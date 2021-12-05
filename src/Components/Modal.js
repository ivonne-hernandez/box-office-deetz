import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Modal.css'

import { fetchSingleMovie } from '../api-Calls'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.selectedMovie,
      title: null,
      poster: null,
      backdrop: null,
      averageRating: null,
      releaseDate: null,
      overview: null,
      genres: null,
      budget: null,
      revenue: null,
      tagline: null,
      isModalLoading: true,
    }
  }


componentDidMount = () => {
  fetchSingleMovie(this.state.movie)
  .then((data) => this.setState({
    title: data.movie.title,
    poster: data.movie.poster_path,
    backdrop: data.movie.backdrop_path,
    averageRating: Number(data.movie.average_rating).toFixed(2),
    releaseDate: data.movie.release_date,
    overview: data.movie.overview,
    runtime: data.movie.runtime,
    genres: data.movie.genres,
    budget: data.movie.budget,
    revenue: data.movie.revenue,
    tagline: data.movie.tagline,
    isModalLoading: false
  }))
}

render = () => {
  const myStyle = {
        backgroundImage: `url(${this.state.backdrop})`
      }

  return ReactDOM.createPortal(
      <div className="modal">
        <article className="modal-window">
          <div className="modal-backdrop-img" style={myStyle}>
          </div>
          <img src={this.state.poster} alt={this.state.title + ` poster`} className="modal-poster"/>
          <div className="modal-poster movie-content">
            <div className="modal-title">
              <h3>{this.state.title}</h3>
            </div>
            <p className="modal-p"><b>Average Rating:</b> {this.state.averageRating} / 10</p>
            <p className="modal-p"><b>Release Date:</b> {this.state.releaseDate}</p>
            <p className="modal-p"><b>Overview:</b> {this.state.overview}</p>
            <p className="modal-p"><b>Genres:</b> {this.state.genres}</p>
            <p className="modal-p"><b>Budget:</b> {this.state.budget}</p>
            <p className="modal-p"><b>Revenue:</b> {this.state.revenue}</p>
            <p className="modal-p"><b>Tagline:</b> {this.state.tagline}</p>
            <button onClick={() => this.props.toggleModal(false)}>Close</button>
          </div>
        </article>
      </div>,
      document.getElementById('modal-container')
    )
}

}

export default Modal
