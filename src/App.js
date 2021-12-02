import React, { Component } from 'react';
import movieData from './movieData';
import Header from './Components/Header'
import MoviesContainer from './Components/MoviesContainer'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        <MoviesContainer />
      </div>
    );
  }

}

export default App;
