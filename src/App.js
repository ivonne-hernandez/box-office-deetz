import React, { Component } from 'react';
import movieData from './movieData';
import Header from './Components/Header';
import MoviesContainer from './Components/MoviesContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      isModalOpen: false,
      selectedMovieId: null
    }
  }

  toggleModal = (bool) => {
    console.log('bool', bool);
    this.setState({isModalOpen: bool});
  }

  setSelectedMovieId = (id) => {
    this.setState({selectedMovieId: id});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MoviesContainer movies={this.state.movies} isModalOpen={this.state.isModalOpen} toggleModal={this.toggleModal} selectedMovieId={this.state.selectedMovieId} setSelectedMovieId={this.setSelectedMovieId}/>
      </div>
    );
  }

}

export default App;
