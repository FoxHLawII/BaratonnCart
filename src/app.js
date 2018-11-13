import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './reducers/index';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Main from './components/pages/Main';

const persistConfig = {
  key: 'root',
  storage,
}

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
);
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>, document.getElementById('app')
)
