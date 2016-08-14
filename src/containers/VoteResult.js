import React from 'react';
import { ResultList } from 'components';
import { connect } from 'react-redux';
import { voteResultRequest } from 'actions/vote';

class VoteResult extends React.Component {
	componentDidMount() {
		this.props.voteResultRequest().then(
			() => {
				//console.log(this.props.resultData);
			}
		);
	}
	render() {
		const dummyData = [ { "id": 3, "title": "트랜센던스 (Transcendence)", "year": "2014", "directorName": "윌리 피스터", "posterUrl": "http://cfile119.uf.daum.net/image/243A7A4752BB8C5C377EEF", "voteCount": 2, "votePer": 0.4 }, { "id": 1, "title": "루시 (Lucy)", "year": "2014", "directorName": "뤽 베송", "posterUrl": "http://cfile17.uf.daum.net/image/2458B3375382F287111B8F", "voteCount": 2, "votePer": 0.4 }, { "id": 2, "title": "엑스 마키나 (Ex Machina)", "year": "2015", "directorName": "알렉스 갈린드", "posterUrl": "http://cfile116.uf.daum.net/image/227AFF4E5486B719247C67", "voteCount": 0, "votePer": 0.0 } ];
		return(
			<div>
				<ResultList data={this.props.resultData}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		resultData : state.result.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		voteResultRequest : () => {
			return dispatch(voteResultRequest());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteResult);
