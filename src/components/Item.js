import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Item extends React.Component {
	render() {
		const buttonLoginState = (
			<Button bsSize="large" bsStyle="primary" block>
				<FontAwesome name="check" /> 투표하기
			</Button>
		);
		const buttonLogoutState = (
			<Button bsSize="large" bsStyle="primary" block disabled>
				<FontAwesome name="exclamation" /> 로그인이 필요합니다
			</Button>
		);
		return (
			<Col sm={4}>
				<Thumbnail src="http://placehold.it/500x700">
					<h3>Movie Title</h3>
					<p>Year, Director</p>
					<hr/>
					<p>Desc</p>
					<p>
						{ this.props.isLoggedIn ? buttonLoginState : buttonLogoutState }
					</p>
				</Thumbnail>
			</Col>
		);
	}
}

Item.propTypes = {
	data : React.PropTypes.object
}

Item.defaultProps = {
	data : {
		id : '',
		title : '',
		year : '',
		directorName : '',
		summary : '',
		posterUrl : ''
	}
}

export default Item;
