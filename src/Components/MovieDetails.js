import React from 'react';
import '../styles/MovieDetails.css';
import { fetchFavoriteMovies, fetchSingleMovie } from '../api-Calls';
import star from '../styles/star.svg';
import faveStar from '../styles/faveStar.svg';

class MovieDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      isLoading: true,
      error: null
    }
  }

  componentDidMount = () => {
    const singleMovie = fetchSingleMovie(this.props.selectedMovie)
    const faveMovies = fetchFavoriteMovies();

    Promise.all([singleMovie, faveMovies])
      .then(data => {
        const favoritedMovies = data[1].faves;
        const singleMovie = data[0].movie;
        singleMovie.favorite = favoritedMovies.includes(singleMovie.id);
        this.setState({ movie: singleMovie, isLoading: false});
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  addFavorite = (newMovie) => {
    this.props.addFavorite(newMovie)
      .then(data => {
        const idFromPostResponse = Number(data.id);
        const idFromMovieInState = Number(this.state.movie.id);

        if (idFromPostResponse === idFromMovieInState) {
          const updatedMovie = this.state.movie;
          updatedMovie.favorite = true;
          this.setState({movie: updatedMovie});  
        }
      })
    .catch(error => {
      this.setState({error: error.message});
    });
  }

  deleteFavorite = (id) => {
    this.props.deleteFavorite(id)
      .then(data => {
        const idFromDeleteResponse = Number(data.id);
        const idFromMovieInState = Number(this.state.movie.id);

        if(idFromDeleteResponse === idFromMovieInState) {
          const updatedMovie = this.state.movie;
          updatedMovie.favorite = false;
          this.setState({movie: updatedMovie}); 
        }
      })
  }

  render = () => {
    if (this.state.movie && !this.state.isLoading) {
      const myStyle = {
        backgroundImage: `url(${this.state.movie.backdrop_path})`
      }
      return (
          <div className="movie-details">
            <article className="movie-details-window">
            <div className="star-container">
              <img 
                alt="favoriting star"
                src={this.state.movie.favorite ? faveStar: star} 
                className="favorite-button"
                onClick={() => {
                  if (this.state.movie.favorite) {
                    this.deleteFavorite(this.state.movie.id);
                  } 
                  else {
                    this.addFavorite({id: this.state.movie.id});
                  }
                }}
              />
            </div>
            <div className="movie-details-backdrop-img" 
              style={myStyle}>
            </div>
            <img src={this.state.movie.poster_path} alt={this.state.movie.title + ` poster`} className="movie-details-poster"/>
            <div className="movie-content">
              <div className="movie-details-title">
                <h3>{this.state.movie.title}</h3>
              </div>
              <p className='movie-details-p'><b>Genres:</b> {this.state.movie.genres.join(', ')} </p>
              <p className="movie-details-p"><b>Average Rating:</b> {Number(this.state.movie.average_rating.toFixed(2))} / 10</p>
              <p className="movie-details-p"><b>Release Date:</b> {this.state.movie.release_date}</p>
              <p className="movie-details-p"><b>Overview:</b> {this.state.movie.overview}</p>
              {this.state.movie.budget ? <p className="movie-details-p"><b>Budget:</b> ${this.state.movie.budget}</p> : null}
              {this.state.movie.revenue ? <p className="movie-details-p"><b>Revenue:</b> ${this.state.movie.revenue}</p> : null}
              {this.state.movie.tagline ? <p className="movie-details-p"><b>Tagline:</b> {this.state.movie.tagline}</p> : null}
              <button onClick={() => this.props.closeMovieDetails()}>Close</button>
            </div>
            </article>
          </div>
      )
    } else {
      return null;
    }
  }
}

export default MovieDetails;
