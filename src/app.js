import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/index';
import Main from './components/pages/Main';

const middlewareLogger = applyMiddleware(thunk, logger);

const store = createStore(reducers, middlewareLogger);

render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app')
)
