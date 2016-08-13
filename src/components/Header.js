import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
	render() {
		const loginButton = (
			<LinkContainer to="/login">
				<NavItem>
					<FontAwesome name="sign-in"/> Login
				</NavItem>
			</LinkContainer>

		);
		const logoutButton = (
			<NavItem onClick={this.props.onLogout}>
				<FontAwesome name="sign-out"/> Logout
			</NavItem>
		);
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Vote Widget</Link>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to="/movie">
							<NavItem>Movie</NavItem>
						</LinkContainer>
						<LinkContainer to="/vote_result">
							<NavItem>Result</NavItem>
						</LinkContainer>
					</Nav>
					<Nav pullRight>
						{ this.props.isLoggedIn ? logoutButton : loginButton }
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

Header.propTypes = {
	isLoggedIn : React.PropTypes.bool,
	onLogout : React.PropTypes.func
};

Header.defaultProps = {
	isLoggedIn : false,
	onLogout : () => { console.log("logout function not defined"); }

};

export default Header;
