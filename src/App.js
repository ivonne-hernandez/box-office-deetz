import React, { Component } from 'react';
// import movieData from './movieData';
import Header from './Components/Header';
import MoviesContainer from './Components/MoviesContainer';
import { fetchAllMovies } from './api-Calls'


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      isModalOpen: false,
      isLoading: true
    }
  }

  componentDidMount = () => {
    fetchAllMovies()
      .then((data) => this.setState({movies: data.movies, isLoading: false}))
  }


  setSelectedMovie = (id) => {
    this.setState({selectedMovie: id})
  }

  toggleModal = (bool) => {
    this.setState({isModalOpen: bool})
  }


  render = () => {
    return (
      <div className="App">
        <Header />
          {this.state.isLoading && <div>Loading...</div>}
          {!this.state.isLoading && <MoviesContainer
          movies={this.state.movies}
          selectedMovie={this.state.selectedMovie}
          isModalOpen={this.state.isModalOpen}
          setSelectedMovie={this.setSelectedMovie}
          toggleModal={this.toggleModal}
        />}
      </div>
    );
  }

}

export default App;
