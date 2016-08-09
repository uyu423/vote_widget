import React from 'react';
import { ProgressBar, Thumbnail, Button, Col, Row, Modal, Media } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

import VoteItem from './VoteItem';
import ResultModal from './modals/ResultModal';

class Body extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Row>
				<VoteItem />
				<VoteItem />
				<VoteItem />
				<ResultModal />
			</Row>
		);
	}
}

export default Body;
