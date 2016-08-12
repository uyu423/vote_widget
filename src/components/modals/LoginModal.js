import React from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginModalOff, loginRequest } from '../../actions';
import { browserHistory } from 'react-router';

class LoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email : "",
		}
		this._loginHandler = this._loginHandler.bind(this);
		this._handleChange = this._handleChange.bind(this);
		console.log(props);
	}

	_loginHandler() {
		let email = this.state.email;
		return this.props.loginRequest(email).then(
			() => {
				if(this.props.loginState === "SUCCESS") {
					alert("로그인 성공!");
					this.props.offModal();
				}
				else {
					alert("로그인 실패");
					this.setState({
						email : ""
					});
				}
			}
		);
	}

	_handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	render() {
		return(
				<Modal show={this.props.showModal} onHide={this.props.offModal}>
					<Modal.Header closeButton>
						<Modal.Title>로그인</Modal.Title>
					</Modal.Header>
					<Modal.Body>
					<form>
						<FormGroup>
							<FormControl
								type="email"
								placeholder="Input Your Email"
								className="email"
								onChange={this._handleChange}
								value={this.state.email}
								name="email"
							/>
						</FormGroup>
						<Button type="button" onClick={this._loginHandler}>
							로그인
						</Button>
					</form>
					</Modal.Body>
				</Modal>
		);
	}
}

LoginModal.propTypes = {
	mode : React.PropTypes.bool,
	onLogin : React.PropTypes.func
}

LoginModal.defaultProps = {
	mode : true,
	onLogin : (email) => { console.error("login function not defined"); }
}

let mapStateToProps = (state) => {
	return {
		showModal : state.loginModal.showModal,
		loginState : state.loginState.login.status
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		offModal: () => dispatch(loginModalOff()),
		loginRequest: (email) => {
			return dispatch(loginRequest(email));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
