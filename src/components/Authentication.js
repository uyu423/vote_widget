import React from 'react';
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';

class Authentication extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email : "",
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleLogin() {
		let email = this.state.email;

		this.props.onLogin(email).then(
			(success) => {
				if(!success) {
					this.setState({
						email : ''
					});
				}
			}
		);
	}

	render() {
		return (
			<Row>
				<Col sm={4} smOffset={4}>
					<FormGroup>
						<FormControl
							name="email"
							type="text"
							placeholder="Input Your Email"
							onChange={this.handleChange}
							value={this.state.email}

						/>
					</FormGroup>
					<Button	
						bsSize="large" 
						bsStyle="primary" 
						onClick={this.handleLogin} 
						block>
						로그인
					</Button>
				</Col>
			</Row>
		);
	}
}

Authentication.propTypes = {
	onLogin : React.PropTypes.func
}

Authentication.defaultProps = {
	onLogin : (email) => { console.log("login func not defined"); }
}

export default Authentication;
