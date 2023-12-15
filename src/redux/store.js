// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./reducers/reducers.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer =combineReducers( {
  characters: charactersSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  
});

const persistor = persistStore(store);

export { store, persistor };
