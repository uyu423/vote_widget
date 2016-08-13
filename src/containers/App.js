import React from 'react';
import { Header } from 'components';
import { connect } from 'react-redux';
import { getStatusRequest, logoutSuccess } from 'actions/authentication';

class App extends React.Component {
	componentDidMount() {
		function getCookie(name) {
			var value = "; " + document.cookie;
			var parts = value.split("; " + name + "=");
			if(parts.length == 2) return parts.pop().split(";").shift();
		}
		let token = getCookie('token');

		console.log("status : ", this.props.status);
		if(typeof token === "undefined") return;
		
		console.log("token : ", token);
		this.props.getStatusRequest(token).then(
			() => {
				console.log("after token chk : ", this.props.status);
				if(!this.props.status.valid) {
					let expireDate = new Date();
					expireDate.setDate((new Date()).getDate() - 1);
					document.cookie = "token=;expires=" + expireDate;
					alert("세션이 끝났습니다");
				}
			}
		);

	}
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout() {
		this.props.logoutRequest();
		alert("로그아웃 되었습니다");
	}
	render() {
		return(
			<div>
				<div className="header">
					<Header isLoggedIn={this.props.status.isLoggedIn} onLogout={this.handleLogout} />
				</div>
				<div className="container">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		status: state.authentication.status
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getStatusRequest : (token) => {
			return dispatch(getStatusRequest(token));
		},
		logoutRequest : () => {
			return dispatch(logoutSuccess());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
