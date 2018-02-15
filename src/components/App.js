import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/index';
import SignUp from './SignUp';
import { Button } from 'semantic-ui-react';
import { agent } from '../agent';
import { store } from '../store';
import { push } from 'react-router-redux';
import { REDIRECT } from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  };
}

const mapDispatchToProps = dispatch => ({
  onRedirect: () => {
    dispatch({ type: REDIRECT });
  }
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
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Route exact path="/" component={Home}/>
        <Route exact path="/sign-in" component={SignIn}/>
      );
    } else {
        return <SignUp />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
