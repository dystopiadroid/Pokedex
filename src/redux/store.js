import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {applyMiddleware, createStore} from 'redux'

import rootReducer from './reducer'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)