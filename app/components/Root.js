import React from 'react';
import Header from './Header';
import VoteList from './VoteList';

class Root extends React.Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<VoteList/>
			</div>
		);
	}
}

export default Root;
