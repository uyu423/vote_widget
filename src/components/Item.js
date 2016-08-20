import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.handleVote = this.handleVote.bind(this);
	}
	handleVote() {
		let movieId = this.props.data.id;

		this.props.handleVote(movieId);
	}

	render() {
		const data = this.props.data;
		const buttonLoginState = (
			<Button bsSize="large" bsStyle="primary" block onClick={this.handleVote}>
				<FontAwesome name="star" /> 투표하기
			</Button>
		);
		const buttonLogoutState = (
			<Button bsSize="large" bsStyle="primary" block disabled>
				<FontAwesome name="exclamation" /> 로그인이 필요합니다
			</Button>
		);
		const buttonSelected = (
			<Button bsSize="large" bsStyle="success" block disabled>
				<FontAwesome name="check" /> 투표하셨습니다 
			</Button>
		);
		return (
			<Col sm={4}>
				<Thumbnail src={data.posterUrl}>
					<h3>{data.title}</h3>
					<p>{data.year}, {data.directorName}</p>
					<hr/>
					<p>{data.summary}</p>
					<p>
						{ this.props.isLoggedIn ? (this.props.userMovieId == data.id ? buttonSelected : buttonLoginState) : buttonLogoutState }
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
