import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';

import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory';

export const browserHistory = createBrowserHistory();

export const store = createStore(
  reducer);
