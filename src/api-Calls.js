const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => response.json())
    .catch((err) => console.log(err))
}

const fetchSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
}

const fetchFavoriteMovies = () => {
  return fetch(`http://localhost:3001/api/v1/favorite-movies`)
  .then((response) => response.json())
  .then((data) => console.log(data))
}

const postFavoriteMovie = (data) => {
   fetch('http://localhost/3001/favorite-movies', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
   }).then(response => response.json());
}


module.exports = {
  fetchAllMovies,
  fetchSingleMovie,
  fetchFavoriteMovies,
  postFavoriteMovie,
}
