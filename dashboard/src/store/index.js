import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"

import auth from './reducers/auth';
import product from './reducers/product';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"]
}

const rootReducer = combineReducers({
  auth,
  product,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

const persistor = persistStore(store);

export { store, persistor }

