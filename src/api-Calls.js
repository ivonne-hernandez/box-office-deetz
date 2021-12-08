const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_694919/videos')
    .then((response) => response.json())
}

const fetchSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
}

module.exports = {
  fetchAllMovies,
  fetchSingleMovie
}
