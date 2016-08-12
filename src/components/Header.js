import React from 'react';
import { Row, Col, Panel, Button, Media, Image } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { loginModalOn } from '../actions';

import LoginModal from './modals/LoginModal';

class Header extends React.Component {
	render() {
		const loginOff = (
			<Button onClick={ this.props.onModal } className="center-block" bsSize="large" bsStyle="primary">
				<FontAwesome name="sign-in"/> 로그인
			</Button>
		);
		const loginOn = (
			<Media>
				<Media.Left>
					<Image width={64} height={64} src="http://placehold.it/64x64" circle/>
				</Media.Left>
				<Media.Body>
					<Media.Heading>E@mail.com <small><a href="#">logout</a></small></Media.Heading>
					<p>Real Name</p>
				</Media.Body>
			</Media>
		);
		return (
			<div className="page-header">
				<Row>
					<Col sm={6} smOffset={3}>
						<Panel>
							{ this.props.isLoggedIn ? loginOn : loginOff }
						</Panel>
					</Col>
				</Row>
			<LoginModal />
			</div>
		);
	}
}

Header.propTypes = {
	onLogout : React.PropTypes.func
}

Header.defaultProps = {
	onLogout : () => { console.error("logout function not defined"); }
}

let mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loginState.login.status.isLoggedIn
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onModal : () => dispatch(loginModalOn())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
