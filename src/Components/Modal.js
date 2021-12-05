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
      tagline: null
    }
  }


componentDidMount = () => {
  fetchSingleMovie(this.state.movie)
}

render = () => {

  if (this.props.isModalOpen && this.props.selectedMovie === this.props.id) {
    return ReactDOM.createPortal(
      <div className = "modal" title={this.props.title}>
        <div className="modal-window">
          <img src={this.props.backdrop} className="modal-backdrop-img"></img>
          <h2>{this.props.title}</h2>
          <p>TagLine</p>

          <button onClick={() => this.props.toggleModal(false)}>Close</button>
        </div>
      </div>,
      document.getElementById('modal-container')
    )
  } else {
    return null;
  }
}

}

export default Modal
