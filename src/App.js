import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Error from './Components/Error';
import MovieDetailsContainer from './Components/MovieDetailsContainer';
import { fetchAllMovies, fetchFavoriteMovies, postFavoriteMovie, deleteFavoriteMovie } from './api-Calls';
import './App.css';
import Favorites from './Components/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: null
    }
  }

  componentDidMount = () => {
    const allMovies = fetchAllMovies();
    const faveMovies = fetchFavoriteMovies();

    Promise.all([allMovies, faveMovies])
      .then(data => {
        const favoritedMovies = data[1].faves;
        const moviesWithFaves = data[0].movies.map(movie => {
          movie.favorite = favoritedMovies.includes(movie.id);
          return movie;
        })
          this.setState({ movies: moviesWithFaves })
        })
        .catch(error => {
          this.setState({ error: error.message });
        });
  }

  addFavorite = (newMovie) => {
    return postFavoriteMovie(newMovie)
      .then(data => {
        const updatedMovies = this.state.movies.map(movie => {
          if (movie.id === data.id) {
            movie.favorite = true;
          }
          return movie;
        })
        this.setState({ movies: updatedMovies });
        return data;
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  deleteFavorite = (id) => {
    return deleteFavoriteMovie(id)
      .then(data => {
        const matchingId = Number(data.id);
        const updatedMovies = this.state.movies.map(movie => {
          if (movie.id === matchingId) {
            movie.favorite = false;
          }
          return movie;
        })
        this.setState({ movies: updatedMovies });
        return data;
      })
      .catch(error => {
        this.setState({error: error.message});
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
              addFavorite={this.addFavorite} 
              deleteFavorite={this.deleteFavorite}
            />
          }
          />
          <Route path="/:id" element={
            <MovieDetailsContainer 
              addFavorite={this.addFavorite}
              deleteFavorite={this.deleteFavorite} 
            />
          }
          />
          <Route path="/favorites" element={<Favorites
              movies={this.state.movies}
              addFavorite={this.addFavorite} 
              deleteFavorite={this.deleteFavorite}
           />
           }
           />
        </Routes>       
      </div>
    );
  }
}

export default App;