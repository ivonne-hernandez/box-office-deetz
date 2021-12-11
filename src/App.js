import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import MovieDetailsContainer from './Components/MovieDetailsContainer';
import { fetchAllMovies, fetchFavoriteMovies, postFavoriteMovie } from './api-Calls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favoriteMovies: [],
      selectedMovie: false,
      isLoading: true
    }
  }

  componentDidMount = () => {
    fetchAllMovies()
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
  }

  setSelectedMovie = (id) => {
    this.setState({ selectedMovie: id });
  }

  resetSelectedMovie = () => {
    this.setState({ selectedMovie: null });
  }

  addFavorite = (data) => {
    this.setState(prevState => ({
      favoriteMovies: [...prevState.favoriteMovies, data]
    }))
    postFavoriteMovie(data)
  }

  render = () => {
    return (
      <div className="App">
        <Header />
        <button onClick={() => fetchFavoriteMovies()}>Click to test favorite fetch</button>
        <Routes>
          <Route path="/" element={
            <Home 
              movies={this.state.movies} 
              isLoading={this.state.isLoading} 
              setSelectedMovie={this.setSelectedMovie}
              addFavorite={this.addFavorite} 
            />
          }
          />
          <Route path="/:id" element={
            <MovieDetailsContainer
              resetSelectedMovie={this.resetSelectedMovie}
            />
          }
          />
        </Routes>       
      </div>
    );
  }

}

export default App;