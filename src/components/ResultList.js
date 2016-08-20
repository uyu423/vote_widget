import React from 'react';
import ResultItem from './ResultItem';
import { Row, Col, Jumbotron } from 'react-bootstrap';

class ResultList extends React.Component {
	render() {
		const mapToComponents = data => {
			return data.map((item, i) => {
				return (
				<ResultItem 
					data={item}
					key={item.id}
				/>);
			});
		};
		return (
			<Row>
				<Col sm={8} smOffset={2}>
				<h1>Vote Result</h1>
				{mapToComponents(this.props.data)}
				</Col>
			</Row>
		);
	}
}

export default ResultList;
