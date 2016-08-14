import React from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';

class ItemList extends React.Component {
	render() {
		const mapToComponents = data => {
			return data.map((item, i) => {
				return (
					<Item
						data={item}
						isLoggedIn={this.props.isLoggedIn}
						key={item.id}
						handleVote={this.props.handleVote}
						userMovieId={this.props.userMovieId}
					/>);
			});
		};
		return (
			<Row>
				{mapToComponents(this.props.data)}
			</Row>
		);
	}
}

ItemList.propTypes = {
	data: React.PropTypes.array,
};

ItemList.defaultProps = {
	dat : [],
}

export default ItemList;
