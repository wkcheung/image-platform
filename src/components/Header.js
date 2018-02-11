import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

const LoggedOutView = props => {
	if (!props.currentUser) {
		return (
			<Menu.Item name="login" active={true}>
				Sign in
			</Menu.Item>
		);
	}
	return null;
}

const LoggedInView = props => {
	if (props.currentUser) {
		return (
			<Menu.Item name="login" active={true}>
				Sign out
			</Menu.Item>
		);
	}
	return null;
}


class Header extends React.Component {
  render() {
    return (
		<Menu secondary>
			<Menu.Menu position='right'>
				<Menu.Item>
					<Input icon='search' placeholder='Search...' />
				</Menu.Item>
				
				<LoggedOutView currentUser={this.props.currentUser} />

				<LoggedInView currentUser={this.props.currentUser} />
			</Menu.Menu>
		</Menu>
    );
  }
}

export default Header;