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
      selectedMovie: null
    }
  }

  setSelectedMovie = (id) => {
    this.setState({selectedMovie: id})
  }


  render() {
    return (
      <div className="App">
        <Header />
        <MoviesContainer movies={this.state.movies} selectedMovie={this.state.selectedMovie} setSelectedMovie={this.setSelectedMovie}/>
      </div>
    );
  }

}

export default App;
