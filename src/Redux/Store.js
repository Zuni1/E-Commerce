import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";

import infoReducer from './Reducer'
import { fetchMovies } from "../Components/Vudu/Movies/Movie";

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};
  
const persistedReducer = persistReducer(persistConfig, infoReducer)
  
export const store = configureStore({
    reducer: {user: persistedReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
  
store.dispatch(fetchMovies())
export const persistor = persistStore(store)
  