import React from 'react';
import { Header, Body } from 'components';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				{ this.props.children }
			</div>
		);
	}
}

export default App;
