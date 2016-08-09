import React from 'react';
import { Modal, Media, ProgressBar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { resModalOff } from '../../actions';

class ResultModal extends React.Component {
	render() {
		return(
			<Modal show={this.props.showModal} onHide={this.props.offModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal Test</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ResultModalItem />
					<ResultModalItem />
					<ResultModalItem />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.offModal}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

class ResultModalItem extends React.Component {
	render() {
		let value = 60;
		return(
			<Media>
				<Media.Left>
					<img width={64} height={64} src="http://placehold.it/64x64" />
				</Media.Left>
				<Media.Body>
					<Media.Heading>Movie Name</Media.Heading>
						<ProgressBar now={value} label={`${value}%`} />
				</Media.Body>
			</Media>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		showModal : state.resModal.showModal
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		offModal: () => dispatch(resModalOff())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultModal);
