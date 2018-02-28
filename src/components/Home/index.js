import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import UploadImage from './UploadImage';
import ImageBoard from '../Image/ImageBoard';

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  currentUser: state.common.currentUser
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
        <ImageBoard />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
