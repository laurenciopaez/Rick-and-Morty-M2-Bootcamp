// actions.js
import axios from 'axios';
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from '../reducers/types';

export const fetchCharactersRequest = () => ({
  type: FETCH_CHARACTERS_REQUEST,
});

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters,
});

export const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error,
});

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersRequest());
    axios
      .get('https://api.example.com/characters')
      .then((response) => {
        const characters = response.data;
        dispatch(fetchCharactersSuccess(characters));
      })
      .catch((error) => {
        dispatch(fetchCharactersFailure(error.message));
      });
  };
};
