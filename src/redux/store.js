// store.js
import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './reducers/reducers.js';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
    }
  })

  export default store ;