import React, { Component } from 'react';
import movieData from './movieData';
import Header from './Components/Header'

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
      </div>
    );
  }

}

export default App;
