import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import brandsReducer from './brandsRedux';
import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import compareProductsReducer from './compareRedux';
import galleryReducer from './galleryRedux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import productsReducer from './productsRedux';
import viewportReducer from './viewportRedux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  compare: compareProductsReducer,
  viewport: viewportReducer,
  brands: brandsReducer,
  gallery: galleryReducer,
  posts: postsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// create store
const store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export const persistor = persistStore(store);
