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
  }

  addFavorite = (data) => {
    this.setState(prevState => ({
      favoriteMovies: [...prevState.favoriteMovies, data]
    }));
    
    postFavoriteMovie(data);
  }

  render = () => {
    return (
      this.state.error !== null ?
        <Error error={this.state.error}/>
      :
      <div className="App">
        <Header />
        <button onClick={() => fetchFavoriteMovies()}>Click to test favorite fetch</button>
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