import React, { Component } from 'react';
import Modal from './Components/Modal';
import { fetchAllMovies } from './api-Calls';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

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
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
  }

  setSelectedMovie = (id) => {
    this.setState({ selectedMovie: id });
  }

  toggleModal = (bool) => {
    this.setState({ isModalOpen: bool });
  }

  render = () => {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home movies={this.state.movies} selectedMovie={this.state.selectedMovie} isModalOpen={this.state.isModalOpen} isLoading={this.state.isLoading} setSelectedMovie={this.setSelectedMovie} toggleModal={this.toggleModal} />} />
        </Routes> 
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
