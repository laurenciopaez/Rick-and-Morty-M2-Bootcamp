// actions.js
import axios from "axios";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_SEARCH_BY_ID,
} from "../reducers/types";

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

//fetch to api, 100 characters
export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersRequest());

    const totalPages = 5;
    const charactersPerPage = 20;

    const requests = [];

    for (let page = 1; page <= totalPages; page++) {
      const request = axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      requests.push(request);
    }

    axios
      .all(requests)
      .then(
        axios.spread((...responses) => {
          const characters = responses.reduce((acc, response) => {
            return acc.concat(response.data.results);
          }, []);

          dispatch(fetchCharactersSuccess(characters));
        })
      )
      .catch((error) => {
        dispatch(fetchCharactersFailure(error.message));
      });
  };
};

//busqueda por id


export const fetchSearchById = (characterId) => {
  return (dispatch, getState) => {
    const state = getState();

    if (!state || !state.characters) {
      console.error('El estado no está definido o no tiene la propiedad characters');
      return;
    }

    const charactersState = state.characters;
    let existingCharacter = null;

    if (characterId == null) {
      console.error('characterId no es un valor válido');
      return;
    }

    console.log('charactersState:', charactersState);

    charactersState.forEach(element => {
        if (element.id === characterId) {
           existingCharacter = element
        }
    });

    if (existingCharacter) {
      dispatch({
        type: FETCH_SEARCH_BY_ID,
        payload: existingCharacter,
      });
    } else {
      dispatch(fetchCharactersRequest());

      axios
        .get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((response) => {
          const character = response.data;
          dispatch({
            type: FETCH_SEARCH_BY_ID,
            payload: character,
          });
        })
        .catch((error) => {
          dispatch(fetchCharactersFailure(error.message));
        });
    }
  };
};
