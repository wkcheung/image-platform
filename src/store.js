import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import { promiseMiddleware, sessionStorageMiddleware } from './middleware';

import logger from 'redux-logger'

import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory';

export const browserHistory = createBrowserHistory();

export const store = createStore(
  reducer, applyMiddleware(promiseMiddleware, sessionStorageMiddleware, logger));
