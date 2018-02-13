import { applyMiddleware, createStore } from 'redux';

import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory';

export const browserHistory = createBrowserHistory();
