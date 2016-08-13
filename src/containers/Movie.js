import React from 'react';
import { connect } from 'react-redux';
import { ItemList } from 'components';

class Movie extends React.Component {
	componentDidMount() {
		console.log("Movie Compo init : ", this.props.status);
	}
	render() {
		return(
			<div>
				<ItemList/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		status : state.authentication.status
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
