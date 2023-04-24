import { createSlice } from "@reduxjs/toolkit";
import * as listFilmAct from './action'

export const filmSlice = createSlice({
  name: "product",
  initialState: {
    loading: true,
    entities: [],
    entity: {
      id: "",
      title: "",
      overview: "",
      poster_path: "",
      poularity: "",
      backdrop_path:"",
    },
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(listFilmAct.getListFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(listFilmAct.getListFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(listFilmAct.getListFilms.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
      })
      .addCase(listFilmAct.getListFilm.pending, (state) => {
        state.loading = true;
      })
      .addCase(listFilmAct.getListFilm.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(listFilmAct.getListFilm.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
      }),
});

export default filmSlice.reducer;