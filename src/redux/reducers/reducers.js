// reducers.js
import {
    FETCH_CHARACTERS_REQUEST,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
    FETCH_SEARCH_BY_ID,
  } from './types';
  
  const initialState = {
    characters: [],
    prevState_characters: [],
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
            prevState_characters: state.characters,
            characters: [action.payload], // Actualiza prevState_characters
          };
      default:
        return state;
    }
  };
  
  export default charactersReducer;
  