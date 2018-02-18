import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/index';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Button } from 'semantic-ui-react';
import agent from '../agent';
import firebaseUtil from '../utilities/firebaseUtil';
import { store } from '../store';
import { push } from 'react-router-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  };
}

const mapDispatchToProps = dispatch => ({
  onLoad: (token) =>
    dispatch({ type: APP_LOAD, token }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.sessionStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? firebaseUtil.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      if (this.props.currentUser) {
        console.log("in App: Has currentUser");
        return (
          <div>
            <Route path="/" component={Home}/>
          </div>
        );
      } else {
        console.log("in App: No currentUser");
        return (
          <div>
            <Route path="/" component={SignUp}/>
            <Route path="/sign-in" component={SignIn}/>
          </div>
        );
      }
    }
    return (
      <div></div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
