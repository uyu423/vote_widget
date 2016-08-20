import React from 'react';
import { Media, Image } from 'react-bootstrap';

class ResultItem extends React.Component {
	render() {
		// progressBar using div.className beacause react-bootstrap minWidth Issue
		// https://github.com/react-bootstrap/react-bootstrap/issues/2142
		const nowPer = 0;
		const nowCnt = 2000;
		const data = this.props.data;
		const style = {
			 'minWidth' : "4.5em",
			 'width': (data.votePer * 100)+ "%"
		}
		return(
			<Media>
				<Media.Left align="middle">
					<Image width={64} height={64} src={data.posterUrl} circle/>
				</Media.Left>
				<Media.Body>
					<Media.Heading>{data.title} <small>{data.year}, {data.directorName}</small></Media.Heading>
					<div className="progress">
						<div className="progress-bar" role="progressbar" aria-valuenow={`${data.votePer}`} aria-valuemin="0" aria-valuemax="100" style={style}>
						{`${data.voteCount}표 (${data.votePer * 100}%)`}
						</div>
					</div>
				</Media.Body>
			</Media>
		);
	}
}

export default ResultItem;
