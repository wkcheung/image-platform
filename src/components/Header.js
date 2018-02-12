import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Input, Menu, Segment } from 'semantic-ui-react'
import logo from '../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
			<Segment className="padding-t-4 padding-b-4">
				<Menu secondary>
				<Menu.Item>
					<img src={logo} />
				</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item>
							<Input icon='search' placeholder='Search...' />
						</Menu.Item>
						<Menu.Item>
							Log out
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Segment>
    );
  }
}

export default Header
