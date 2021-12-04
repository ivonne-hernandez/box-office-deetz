
const fetchAllMovies = () => {
return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
.then((response) => response.json())
.catch((err) => console.log(err))
}

export default fetchAllMovies
