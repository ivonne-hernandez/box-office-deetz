import React, { Component } from 'react';
import MovieDetails from './Components/MovieDetails';
import MovieDetailContainer from './Components/MovieDetailContainer';
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

  toggleModal = () => {
    this.setState({ selectedMovie: null });
  }

  render = () => {
    return (
      <div className="App">
        <Header />
        {!this.state.selectedMovie ? <Home
        movies={this.state.movies}
        selectedMovie={this.state.selectedMovie}
        setSelectedMovie={this.setSelectedMovie}
        toggleModal={this.toggleModal}
  
        /> 
        :
        <MovieDetailContainer
        selectedMovie={this.state.selectedMovie}
        toggleModal={this.toggleModal}
        />
        }
        
        
      </div>
    );
  }

}

// coming back to this when we return to implementing Router - valid Route path for homepage.
// {/* <Routes>
//  <Route path="/" element={<Home movies={this.state.movies} selectedMovie={this.state.selectedMovie} isLoading={this.state.isLoading} setSelectedMovie={this.setSelectedMovie} toggleModal={this.toggleModal} />}/>
// </Routes>  */}


export default App;
