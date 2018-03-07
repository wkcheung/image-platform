import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Input, Menu, Segment } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg';
import { USER_SIGN_OUT } from '../../constants/actionTypes';
import firebaseUtil from '../../utilities/firebaseUtil';
import * as Constants from '../../constants/constants';

const mapStateToProps = state => ({
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickSignOut: () => {
    const payload = firebaseUtil.Auth.signOut();
    dispatch({ type: USER_SIGN_OUT });
  }
});

class Header extends Component {
  render() {
    return (
      <div id="header" style={{height: Constants.HEADER_HEIGHT}} className="padding-b-4 fixed-top full-width">
        <Segment>
          <Menu secondary>
            <Link to="/">
              <Menu.Item>
                <img src={logo} />
              </Menu.Item>
            </Link>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item>
                <Icon name='user' />
                {this.props.currentUser.email}
              </Menu.Item>
              <Menu.Item onClick={this.props.onClickSignOut}>
                Sign out
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
