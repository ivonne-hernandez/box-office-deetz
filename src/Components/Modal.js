import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchSingleMovie } from '../api-Calls';

import '../styles/Modal.css'

class Modal extends Component {
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
  //need to consider how we'll capture the id
  componentDidMount = () => {
    // this.setState({movie: this.props.selectedMovie})
    // fetchSingleMovie(this.state.movie).then(data => this.setState({
    //   title: data.title,
    //   poster: data.poster,
    //   backdrop: data.backdrop,
    //   averageRating: data.averageRating,
    //   releaseDate: data.releaseDate, 
    //   overview: data.overview,
    //   genres: data.genres,
    //   budget: data.budget,
    //   revenue: data.revenue,
    //   tagline: data.tagline
    // }))
    console.log(`this.props`, this.props)
  }

  //any props passed down can be called using this.props
  //id (?), selectedMovie, isModalOpen, toggleModal maybe needed since this component changes their state

 
  render = (id) => {
    // const myStyle = {
    //   backgroundImage: `url(${backdrop})`
    // }
    // if (this.props.isModalOpen && this.props.selectedMovie === id) {
      return ReactDOM.createPortal(
        <div className="modal">
          <article className="modal-window">
            {/* <div className="modal-backdrop-img" style={myStyle}>
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
            </div> */}
          </article>
        </div>,
        document.getElementById('modal-container')
      )
    // } else {
    //   return null;
    // }
  }

}
export default Modal;
