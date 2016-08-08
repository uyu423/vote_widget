import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import voteList from './VoteList';

class Home extends React.Component {
	render() {
		return (
			<div>
			<Header/>
			<VoteList/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		messages : state.messages
	};
};

//export default connect(mapStateToProps)(Home);
export default Home;
