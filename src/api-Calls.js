const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

const fetchSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

const fetchFavoriteMovies = () => {
  return fetch(`https://serene-mountain-56380.herokuapp.com/api/v1/favorite-movies`)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
  });
}

const postFavoriteMovie = (newMovie) => {
  return fetch('https://serene-mountain-56380.herokuapp.com/api/v1/favorite-movies', {
    method: 'POST',
    body: JSON.stringify(newMovie),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

const deleteFavoriteMovie = (id) => {
  return fetch(`https://serene-mountain-56380.herokuapp.com/api/v1/favorite-movies/${id}`, {
    method: 'DELETE'})
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

module.exports = {
  fetchAllMovies,
  fetchSingleMovie,
  fetchFavoriteMovies,
  postFavoriteMovie,
  deleteFavoriteMovie
}
