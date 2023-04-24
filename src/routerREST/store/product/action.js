import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpServices } from "../../../server/api";

const baseURL = "https://api.themoviedb.org/3";
const imagesURL = "https://image.tmdb.org/t/p/w500";
const apiKey = "d199ca2ba6607648bb1c0a1ae059710a";

export const getListFilms = createAsyncThunk("feat/getListFilms", async () => {
  try {
    const response = await httpServices.get(
      `${baseURL}/movie/popular?page=1&api_key=${apiKey}`
    );
    return response.data.results ;
  } catch (error) {throw error}
});
export const getListFilm = createAsyncThunk("feat/getListFilm", async (filmId) => {
  try {
    const response = await httpServices.get(
      `${baseURL}/movie/${filmId}?api_key=${apiKey}`
    );
    console.log('data',response.data)
    return response.data ;
  } catch (error) {throw error}
});
