import React, { Component } from 'react';
import movieData from './movieData';
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
        <h1>Box Office Deetz</h1>
      </div>
    );
  }

}

export default App;
