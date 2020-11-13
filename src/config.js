// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '51e456f25562d3b2c4aba8d21e18b372';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const TRENDING_BASE_URL = `${API_URL}trending/movie/day?api_key=${API_KEY}`;
const TOP_RATED = `${API_URL}movie/top_rated?api_key=${API_KEY}`;
const UPCOMING = `${API_URL}movie/upcoming?api_key=${API_KEY}`;
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, UPCOMING, POSTER_SIZE, SEARCH_BASE_URL, POPULAR_BASE_URL, TRENDING_BASE_URL, TOP_RATED };
