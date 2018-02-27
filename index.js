import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';

import { browserHistory, store } from './src/store';

import App from './src/components/App';
import { firebaseApp } from './src/utilities/firebaseUtil';

import { USER_SIGN_IN } from './src/constants/actionTypes';

import './lib/semantic/dist/semantic.min.css';
import './src/assets/css/global.css';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    const payload = { user: { email: user.email, refreshToken: user.refreshToken} };
    store.dispatch({ type: USER_SIGN_IN, payload });
    browserHistory.replace('/');
  } else {
    browserHistory.push('/');
  }
})

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={ browserHistory }>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
