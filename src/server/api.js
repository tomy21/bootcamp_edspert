import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const imagesURL = "https://image.tmdb.org/t/p/w500";
const apiKey = "d199ca2ba6607648bb1c0a1ae059710a";

export const getMovies = async () => {
  const res = await axios.get(
    `${baseURL}/movie/popular?page=1&api_key=${apiKey}`
  );
  console.log({ list: res.data.results });
  return res.data.results;
};

export const httpServices = axios.create({
    baseUrl: "https://api.themoviedb.org/3"
});

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};
