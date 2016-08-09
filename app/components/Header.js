import React from 'react';
import { Row, Col, Panel, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
	render() {
		return (
			<div className="page-header">
				<Row>
					<Col sm={6} smOffset={3}>
						<Panel>
							<Button className="center-block" bsSize="large" bsStyle="primary">
								<FontAwesome name="sign-in"/> 로그인
							</Button>
						</Panel>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Header;
