import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SignUp from './SignUp';
import UploadImage from './UploadImage';
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
        <div>
          <Header currentUser={this.props.currentUser} />
          <UploadImage />
        </div>
      );
    } else {
        return <SignUp />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
