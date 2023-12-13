// reducers.js
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_SEARCH_BY_ID,
  FETCH_RESET,
  GET_SPECIES,
  FETCH_FILTER_BY_GENRE,
  FETCH_FILTER_BY_SPECIES,
  FETCH_FILTER_BY_STATE,
} from "./types";

const initialState = {
  characters: [],
  prevState_characters: [],
  species: [],
  loading: false,
  error: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
        prevState_characters: action.payload,
        error: null,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        characters: [],
        error: action.payload,
      };
    case FETCH_SEARCH_BY_ID:
      return {
        ...state,
        prevState_characters: state.characters,
        characters: [action.payload], // Actualiza prevState_characters
      };
    case FETCH_RESET:
      return {
        ...state,
        characters: [...state.prevState_characters],
      };
    case GET_SPECIES:
      return {
        ...state,
        species: action.payload,
      };
    case FETCH_FILTER_BY_GENRE:
      return {
        
        ...state,
        characters: action.payload,
      };
    case FETCH_FILTER_BY_SPECIES:
      return {
        
        ...state,
        characters: action.payload,
      };
    case FETCH_FILTER_BY_STATE:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
