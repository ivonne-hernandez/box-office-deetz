import React, { Component } from 'react';
import Header from './Components/Header';
import MoviesContainer from './Components/MoviesContainer';
import Modal from './Components/Modal';
import { fetchAllMovies } from './api-Calls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      isModalOpen: false,
      isLoading: true,
      error: null
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_694919/videos')
      .then((response) => {
        // console.log(response)
        if (response.status === 500) {
          this.setState({ error: response.statusText })
        } else {
          return response.json()
        }
      }
      )
      .then(data => {
        this.setState({ movies: data.movies, isLoading: false })
      })
      // .catch((error) => {
      //   console.log(`this.state.isLoading`, this.state.isLoading)
      //   console.log('there was an error', error)
      // });
  }


  setSelectedMovie = (id) => {
    this.setState({ selectedMovie: id });
  }

  toggleModal = (bool) => {
    this.setState({ isModalOpen: bool });
  }

  render = () => {
    return (
      {if (this.state.error !== null) {
        <p>Error: ${this.state.error}</p>
      } else {
        <div className="App">
          <Header />
          {this.state.isLoading && <div>Loading...</div>}
          {!this.state.isLoading && 
            <MoviesContainer movies={this.state.movies}
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
      }}
    )
  }

}

export default App;
