import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import MovieDetailsContainer from './Components/MovieDetailsContainer';
import { fetchAllMovies } from './api-Calls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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

  render = () => {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <Home 
              movies={this.state.movies} 
              isLoading={this.state.isLoading} 
              setSelectedMovie={this.setSelectedMovie} 
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


// where is our useParams being set?
//I removed the selectedMovie={this.state.selectedMovie} as props from the MovieDetailsContainer
//and it still works
//on MovieDetailsContainer I'm assigning the selected