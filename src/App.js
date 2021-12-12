import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Error from './Components/Error';
import MovieDetailsContainer from './Components/MovieDetailsContainer';
import { fetchAllMovies, fetchFavoriteMovies, postFavoriteMovie } from './api-Calls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favoriteMovies: [],
      error: null,
      isLoading: true
    }
  }

  componentDidMount = () => {
    fetchAllMovies()
      .then(data => {
        this.setState({ movies: data.movies, isLoading: false })
      })
      .catch(error => {
        this.setState({error: error.message})
      });
    
    fetchFavoriteMovies()
      .then(data => {
        this.setState({ favoriteMovies: data.faves})
      })
      .catch(error => {
        this.setState({error: error.message})
      });
  }

  addFavorite = (newMovie) => {
    postFavoriteMovie(newMovie)
      .then(data => {
        this.setState({
          favoriteMovies: [...this.state.favoriteMovies, data.id]
        });
      })
      .catch(error => {
        this.setState({error: error.message})
      });
  }

  render = () => {
    return (
      this.state.error !== null ?
        <Error error={this.state.error}/>
      :
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <Home 
              movies={this.state.movies} 
              isLoading={this.state.isLoading} 
              addFavorite={this.addFavorite} 
            />
          }
          />
          <Route path="/:id" element={<MovieDetailsContainer/>}/>
        </Routes>       
      </div>
    );
  }

}

export default App;