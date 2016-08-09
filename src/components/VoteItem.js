import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { resModalOn } from '../actions';

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
						<Button onClick={ this.props.onModal } bsSize="large" bsStyle="primary" block>
							<FontAwesome name="check"/> 투표하기
						</Button>
					</p>
				</Thumbnail>
			</Col>
		);
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onModal: () => dispatch(resModalOn())
	}
}

export default connect(undefined, mapDispatchToProps)(VoteItem);
