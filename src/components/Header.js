import React from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { loginModalOn } from '../actions';

import LoginModal from './modals/LoginModal';

class Header extends React.Component {
	render() {
		return (
			<div className="page-header">
				<Row>
					<Col sm={6} smOffset={3}>
						<Panel>
							<Button onClick={ this.props.onModal } className="center-block" bsSize="large" bsStyle="primary">
								<FontAwesome name="sign-in"/> 로그인
							</Button>
						</Panel>
					</Col>
				</Row>
			<LoginModal />
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onModal : () => dispatch(loginModalOn())
	}
}

export default connect(undefined, mapDispatchToProps)(Header);
