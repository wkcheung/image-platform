import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { browserHistory, store } from './src/store';
import { Router, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import App from './src/components/App';

import './lib/dropzonejs/dropzone.min.css';
import './lib/semantic/dist/semantic.min.css';
import './src/assets/css/global.css';

// let store = createStore(todoApp)

// render(
  // <Provider store={store}>
    // <App />
  // </Provider>,
  // document.getElementById('root')
// )

// ReactDOM.render((
//   <ConnectedRouter history={ browserHistory }>
//     <Switch>
//       <Route path="/" component={ App } />
//     </Switch>
//   </ConnectedRouter>
// ), document.getElementById('root'));

ReactDOM.render((
  <Router path = "/" history={ browserHistory }>
    <Route path="/app" component={ App } />
  </Router>
), document.getElementById('root'));
