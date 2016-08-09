import React from 'react';
import { Thumbnail, Button, Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Body extends React.Component {
	render() {
		return(
			<Row>
				<VoteItem />
				<VoteItem />
				<VoteItem />
			</Row>
		);
	}
}

class VoteItem extends React.Component {
	render() {
		return(
			<Col sm={4}>
				<Thumbnail src="http://placehold.it/500x700">
					<h3>MovieName</h3>
					<p>Year, Director</p>
					<hr/>
					<p>Movie Desc</p>
					<p>
						<Button bsSize="large" bsStyle="primary" block>
							<FontAwesome name="check"/> 투표하기
						</Button>
					</p>
				</Thumbnail>
			</Col>
		);
	}
}

export default Body;
