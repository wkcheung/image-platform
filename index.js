import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { browserHistory, store } from './src/store';
import { Router, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import App from './src/components/App';
import { firebaseApp } from './src/utilities/firebaseUtil';

import './lib/dropzonejs/dropzone.min.css';
import './lib/semantic/dist/semantic.min.css';
import './src/assets/css/global.css';

firebaseApp.auth().onAuthStateChanged(user => {
  console.log("onAuthStateChanged");
  if(user) {
      console.log(user);
  } else {
      console.log("no user");
  }
})

ReactDOM.render((
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>
), document.getElementById('root'));
