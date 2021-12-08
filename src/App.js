import React, { Component } from 'react';
// import movieData from './movieData';
import Header from './Components/Header';
import MoviesContainer from './Components/MoviesContainer';
import Modal from './Components/Modal'
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


  // this function is purely for testing what the response looks like. This can 100% be removed as soon as we know what
  // the response looks and acts like so we can mimic it for our Cypress intercept tests
  // also remove line 50 in the render method. 
  testFunction = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    // .then((response) => response.json())
    .then((response) => console.log(response))
  }


  render = () => {
    return (
      <div className="App">
        <button onClick={() => this.testFunction()}>CLICK</button>
        <Header />
          {this.state.isLoading && <div>Loading...</div>}
          {!this.state.isLoading && <MoviesContainer
          movies={this.state.movies}
          selectedMovie={this.state.selectedMovie}
          isModalOpen={this.state.isModalOpen}
          setSelectedMovie={this.setSelectedMovie}
          toggleModal={this.toggleModal}
        />}
        {this.state.isModalOpen && this.state.selectedMovie ?
          <Modal
          selectedMovie={this.state.selectedMovie}
          toggleModal={this.toggleModal}
          />
          : null
        }
      </div>
    );
  }

}

export default App;
