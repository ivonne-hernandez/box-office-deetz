import React, { Component } from 'react';
import Modal from './Components/Modal';
import ModalContainer from './Components/ModalContainer';
import { fetchAllMovies } from './api-Calls';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

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
        <Header />
        <Routes>
          <Route path="/" element={<Home movies={this.state.movies} selectedMovie={this.state.selectedMovie} isModalOpen={this.state.isModalOpen} isLoading={this.state.isLoading} setSelectedMovie={this.setSelectedMovie} toggleModal={this.toggleModal} />}/>
          <Route path="/test" element=
            {
            <>
            <ModalContainer isModalOpen={this.state.isModalOpen} selectedMovie={this.state.selectedMovie} toggleModal={this.toggleModal} /> 
            <Home movies={this.state.movies} selectedMovie={this.state.selectedMovie} isModalOpen={this.state.isModalOpen} isLoading={this.state.isLoading} setSelectedMovie={this.setSelectedMovie} toggleModal={this.toggleModal}/>
            </>
            }/>
        </Routes> 
        
      </div>
    );
  }

}

export default App;
