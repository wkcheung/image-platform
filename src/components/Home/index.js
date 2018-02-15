import React, { Component } from 'react';
import Header from './Header';
import UploadImage from './UploadImage';

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED })
});

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header currentUser={this.props.currentUser} />
        <UploadImage />
      </div>
    )
  }
}
