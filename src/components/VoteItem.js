import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { resModalOn } from '../actions';

class VoteItem extends React.Component {
	render() {
		const loginOnButton = (
			<Button onClick={ this.props.onModal } bsSize="large" bsStyle="primary" block>
				<FontAwesome name="check"/> 투표하기
			</Button>
		);
		const loginOffButton = (
			<Button bsSize="large" bsStyle="primary" block disabled>
				<FontAwesome name="exclamation"/> 로그인이 필요합니다
			</Button>
		);

		return(
			<Col sm={4}>
				<Thumbnail src="http://placehold.it/500x700">
					<h3>MovieName</h3>
					<p>Year, Director</p>
					<hr/>
					<p>Movie Desc</p>
					<p>
						{ this.props.loginState ? loginOnButton : loginOffButton }
					</p>
				</Thumbnail>
			</Col>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		loginState : state.loginState.loginState
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onModal: () => dispatch(resModalOn())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteItem);
