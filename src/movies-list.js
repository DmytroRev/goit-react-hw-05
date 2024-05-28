import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzg1ZTc3NTQxMTQyZGI3NDYyYTNlZGUxY2JmNjQwYSIsInN1YiI6IjY2NTM2ZDgyZTJmNjcwYmZlNjBhZWRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B4Z3BfkoOG6oQZcSg545uhno7arlhn1jo3tcCQtr9jg'
  }
};

export const getTrendingMovies = async() => {
    const response = await axios.get("/trending/movie/day", options)
    return response.data.results
}

export const getSearchMovies = async (query) => {
    const response = await axios.get("/search/movie", {
        params: {
            query
        },
        headers: {
    Authorization: "'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzg1ZTc3NTQxMTQyZGI3NDYyYTNlZGUxY2JmNjQwYSIsInN1YiI6IjY2NTM2ZDgyZTJmNjcwYmZlNjBhZWRjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B4Z3BfkoOG6oQZcSg545uhno7arlhn1jo3tcCQtr9jg'"
}
    })
    return response.data.results
}

export const getMovieDetails = async (id) => {
    const response = await axios.get(`/movie/${id}`, options)
    return response.data
}
