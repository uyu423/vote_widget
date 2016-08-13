import React from 'react';
import { Authentication } from 'components';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(email) {
		return this.props.loginRequest(email).then(
			() => {
				if(this.props.status === "SUCCESS") {
					let loginData = {
						isLoggedIn : true,
						email : email
					}
					alert('로그인 성공');
					browserHistory.push('/');
					return true;
				}
				else {
					console.log(this.props);
					alert('로그인 실패');
					return false;
				}
			}
		);
	}

	render() {
		return(
			<div>
				<Authentication onLogin={this.handleLogin} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		status : state.authentication.login.status
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginRequest : (email) => {
			return dispatch(loginRequest(email));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
