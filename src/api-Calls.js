const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/potatoes')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response status is ${response.statusText}`)
      }
      return response.json()
    })
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
