import React from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginModalOff } from '../../actions';

class LoginModal extends React.Component {
	_login() {
		alert("Login Method");
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
							/>
						</FormGroup>
						<Button type="button" onClick={this._login.bind(this)}>
							로그인
						</Button>
					</form>
					</Modal.Body>
				</Modal>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		showModal : state.loginModal.showModal
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		offModal: () => dispatch(loginModalOff())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
