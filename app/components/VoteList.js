import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class VoteList extends React.Component {
	render() {
		return (
			<Grid>
				<VoteRow/>
			</Grid>
		);
	}
}

class VoteRow extends React.Component {
	render() {
		return (
			<Row>
				<VoteItem/>
				<VoteItem/>
				<VoteItem/>
			</Row>
		);
	}
}

class VoteItem extends React.Component {
	render() {
		return (
			<Col sm={4}>
				<Thumbnail src="http://placehold.it/500x700">
					<h3>Movie Title</h3>
					<p>Movie Year, Director</p>
					<hr/>
						<p>Movie Desc</p>
					<p>
					<Button bsStyle="primary" bsSize="large" block>
					<FontAwesome name="check" /> 투표하기
					</Button>
					</p>
				</Thumbnail>
			</Col>
		);
	}
}

export default VoteList;
