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


// <Link to={`/${id}`}> in MovieCard is what is setting our useParams which allows us to do grab and pass down the id to the MovieDetails in the MovieDetailsContainer


//MovieCard ATM: it's having every single card be a link hence the styling weirdness
//We may want to think about removing our <Link> in MovieCard and instead
// import useNavigate and useParams 
//in our onClick event handler we can have it 
//navigate us to the id since we have access to it as props in this component