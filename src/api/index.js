import axios from 'axios'


export const movieList = () => axios.get("https://yts.mx/api/v2/list_movies.json")