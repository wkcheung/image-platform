import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { browserHistory, store } from './src/store';

import App from './src/components/App';
import { USER_SIGN_IN } from './src/constants/actionTypes';

import './lib/dropzonejs/dropzone.min.css';
import './lib/semantic/dist/semantic.min.css';
import './src/assets/css/global.css';


ReactDOM.render((
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
