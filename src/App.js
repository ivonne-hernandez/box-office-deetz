import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Error from './Components/Error';
import MovieDetailsContainer from './Components/MovieDetailsContainer';
import { fetchAllMovies, fetchFavoriteMovies, postFavoriteMovie, deleteFavoriteMovie } from './api-Calls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: null,
      isLoading: true
    }
  }

  componentDidMount = () => {
    const allMovies = fetchAllMovies();
    const faveMovies = fetchFavoriteMovies();

    Promise.all([allMovies, faveMovies])
      .then(data => {
        const favoritedMovies = data[1].faves;
        const moviesWithFaves = data[0].movies.map(movie => {
          movie.favorite = favoritedMovies.includes(movie.id);
          return movie;
        })
          this.setState({ movies: moviesWithFaves, isLoading: false})
          console.log(`compDidMount state.movies:`, this.state.movies)
        })
        .catch(error => {
          this.setState({error: error.message})
        });
  }

  addFavorite = (newMovie) => {
    postFavoriteMovie(newMovie)
      .then(data => {
        console.log(`addFave state.movies:`, this.state.movies)
        const updatedMovies = this.state.movies.map(movie => {
          if (movie.id === data.id) {
            movie.favorite = true;
          }
          return movie;
        })
        this.setState({ movies: updatedMovies });
      })
      .catch(error => {
        this.setState({error: error.message})
      });
  }

  deleteFavorite = (id) => {
    deleteFavoriteMovie(id)
      .then(data => {
        const matchingId = Number(data.id);
        const updatedMovies = this.state.movies.map(movie => {
          if (movie.id === matchingId) {
            movie.favorite = false;
          }
          return movie;
        })
        this.setState({ movies: updatedMovies });
      })
      .catch(error => {
        this.setState({error: error.message})
      });
  }

  render = () => {
    return (
      this.state.error !== null ?
        <Error error={this.state.error}/>
      :
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <Home 
              movies={this.state.movies} 
              isLoading={this.state.isLoading} 
              addFavorite={this.addFavorite} 
              deleteFavorite={this.deleteFavorite}
            />
          }
          />
          <Route path="/:id" element={<MovieDetailsContainer/>}/>
        </Routes>       
      </div>
    );
  }

}

export default App;