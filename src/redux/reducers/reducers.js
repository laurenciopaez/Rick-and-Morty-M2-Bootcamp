// charactersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    prevState_characters: [],
    species: [],
    liked_characters: [],
    loading: false,
    error: null,
  },
  reducers: {
    addLike: (state, action) => {
      const newLikedCharacter = action.payload;
      if (!state.liked_characters.some((character) => character.id === newLikedCharacter.id)) {
        state.liked_characters.push(newLikedCharacter);
      }
    },
    deleteLike: (state, action) => {
      state.liked_characters = action.payload;
    },
    fetchCharactersRequest: (state) => {
      state.loading = true;
    },
    fetchCharactersSuccess: (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.prevState_characters = action.payload;
      state.error = null;
    },
    fetchCharactersFailure: (state, action) => {
      state.loading = false;
      state.characters = [];
      state.error = action.payload;
    },
    fetchSearchById: (state, action) => {
      state.prevState_characters = state.characters;
      state.characters = [action.payload];
    },
    fetchReset: (state) => {
      state.characters = [...state.prevState_characters];
    },
    getSpecies: (state, action) => {
      state.species = action.payload;
    },
    fetchFilterByGenre: (state, action) => {
      state.characters = action.payload;
    },
    fetchFilterBySpecies: (state, action) => {
      state.characters = action.payload;
    },
    fetchFilterByState: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const {
  addLike,
  deleteLike,
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersFailure,
  fetchSearchById,
  fetchReset,
  getSpecies,
  fetchFilterByGenre,
  fetchFilterBySpecies,
  fetchFilterByState,
} = charactersSlice.actions;

export default charactersSlice.reducer;
