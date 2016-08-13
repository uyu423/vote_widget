import React from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';

class ItemList extends React.Component {
	render() {
		return (
			<Row>
				<Item/>
				<Item/>
				<Item/>
			</Row>
		);
	}
}

export default ItemList;
