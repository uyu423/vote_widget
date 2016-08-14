import React from 'react';
import { Jumbotron, Button, ButtonToolbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

class Home extends React.Component {
	render() {
		return(
			<Jumbotron>
				<h1>This is a Movie Vote Widget...?</h1>
				<p>express.js + MySQL(MariaDB) + React.js + Ice Americano... react is very difficult.. but interesting..</p>
				<p>in fact.. my first react app...</p>
				<ButtonToolbar>
					<LinkContainer to="/movie">
						<Button bsStyle="primary" bsSize="lg">
							영화 목록 보러가기
						</Button>
					</LinkContainer>
					<LinkContainer to="/vote_result">
						<Button bsStyle="primary" bsSize="lg">
							투표 결과 보러가기	
						</Button>
					</LinkContainer>
				</ButtonToolbar>
			</Jumbotron>
		);
	}
}

export default Home;
