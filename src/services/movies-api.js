import axios from "axios";

const API_KEY = '0feaca93847c0f717b0c2876a0a51030';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = { api_key: API_KEY };

export async function fetchTrandingMovies() {
    try {
        const response = await axios.get(`trending/movie/day`);
        if (response.status === 200) {
            return response.data;
        }
    } catch(error) {
        console.log(error.message);
    }
}

export async function fetchMoviesByQuery(query) {
    try {
        const response = await axios.get(`/search/movie?query=${query}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch(error) {
        console.log(error.message);
    }
}

export async function fetchMovieDetails(id) {
    try {
        const response = await axios.get(`/movie/${id}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch(error) {
        console.log(error.message);
    }
}

export async function fetchMovieCast(id) {
    try {
        const response = await axios.get(`/movie/${id}/credits`);
        if (response.status === 200) {
            return response.data;
        }
    } catch(error) {
        console.log(error.message);
    }
}

export async function fetchMovieReviews(id) {
    try {
        const response = await axios.get(`/movie/${id}/reviews`);
        if (response.status === 200) {
            return response.data;
        }
    } catch(error) {
        console.log(error.message);
    }
}