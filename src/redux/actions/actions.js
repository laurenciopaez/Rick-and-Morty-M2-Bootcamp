// actions.js
import axios from "axios";
import {
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
} from "../reducers/reducers";

export const fetchLikedCharacters = (character) => (dispatch) => {
  dispatch(addLike(character));
};

export const fetchUnlikedCharacters = (id) => (dispatch, getState) => {
  const state = getState();
  console.log(state.characters.liked_characters);
  const newLikedCharacters = state.characters.liked_characters.filter(
    (character) => character.id !== id
  );
  let newPack = newLikedCharacters;
  dispatch(deleteLike(newPack));
};

export const fetchCharactersRequestAction = () => (dispatch) => {
  dispatch(fetchCharactersRequest());
};

export const fetchCharactersSuccessAction = (characters) => (dispatch) => {
  dispatch(fetchCharactersSuccess(characters));
};

export const fetchCharactersFailureAction = (error) => (dispatch) => {
  dispatch(fetchCharactersFailure(error));
};

export const getSpeciesAction = () => (dispatch, getState) => {
  let species = [];

  const state = getState();
  let objCharacters = state.characters;

  const charactersArray = Object.values(objCharacters);

  charactersArray.forEach((element) => {
    if (!species.includes(element.species)) {
      species.push(element.species);
    }
  });

  dispatch(getSpecies(species));
};

export const fetchCharactersAction = () => (dispatch) => {
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

export const fetchSearchByIdAction = (characterId) => (dispatch, getState) => {
  const state = getState();

  if (!state || !state.characters) {
    console.error("El estado no está definido o no tiene la propiedad characters");
    return;
  }

  const charactersState = state.characters;
  let existingCharacter = null;

  if (characterId == null) {
    console.error("characterId no es un valor válido");
    return;
  }

  charactersState.forEach((element) => {
    if (element.id === characterId) {
      existingCharacter = element;
    }
  });

  if (existingCharacter) {
    dispatch(fetchSearchById(existingCharacter));
  } else {
    dispatch(fetchCharactersRequest());

    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => {
        const character = response.data;
        dispatch(fetchSearchById(character));
      })
      .catch((error) => {
        dispatch(fetchCharactersFailure(error.message));
      });
  }
};

export const fetchResetAction = () => (dispatch) => {
  dispatch(fetchReset());
};

export const fetchFilterByGenreAction = (genre) => (dispatch, getState) => {
  const state = getState();

  if (!state || !state.characters) {
    console.error("El estado no está definido o no tiene la propiedad characters");
    return;
  }

  const charactersState = state.characters;
  let leftGenres = [];

  const charactersArray = Object.values(charactersState);

  charactersArray.forEach((element) => {
    if (element.gender === genre) {
      leftGenres.push(element);
    }
  });

  dispatch(fetchFilterByGenre(leftGenres));
};

export const fetchFilterByStateAction = (status) => (dispatch, getState) => {
  const state = getState();

  if (!state || !state.characters) {
    console.error("El estado no está definido o no tiene la propiedad characters");
    return;
  }
  const charactersState = state.characters;
  let leftState = [];

  const charactersArray = Object.values(charactersState);

  charactersArray.forEach((element) => {
    if (element.status === status) {
      leftState.push(element);
    }
  });

  dispatch(fetchFilterByState(leftState));
};

export const fetchFilterBySpeciesAction = (species) => (dispatch, getState) => {
  const state = getState();

  if (!state || !state.characters) {
    console.error("El estado no está definido o no tiene la propiedad characters");
    return;
  }
  const charactersState = state.characters;
  let leftSpecies = [];

  const charactersArray = Object.values(charactersState);

  charactersArray.forEach((element) => {
    if (element.species === species) {
      leftSpecies.push(element);
    }
  });

  dispatch(fetchFilterBySpecies(leftSpecies));
};
