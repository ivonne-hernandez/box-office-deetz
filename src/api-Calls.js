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
  return fetch(`http://localhost:3001/api/v1/favorite-movies`)
  .then((response) => response.json())
  .then((data) => console.log(data))
}

const postFavoriteMovie = (newMovie) => {
  fetch('http://localhost:3001/api/v1/favorite-movies', {
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


module.exports = {
  fetchAllMovies,
  fetchSingleMovie,
  fetchFavoriteMovies,
  postFavoriteMovie,
}
