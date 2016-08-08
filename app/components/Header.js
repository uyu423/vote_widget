import React from 'react';
import { Panel, Button, Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
	render() {
		return(
			<div className="page-header">
				<Row>
				<Col sm={6} smOffset={3}>
				<Panel>
					<Button bsStyle="primary" bsSize="large" block>
						<FontAwesome name="sign-in" /> Login
					</Button>
				</Panel>
				</Col>
				</Row>
			</div>
		);
	}
}

export default Header;
