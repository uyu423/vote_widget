import {
	VOTE,
	VOTE_SUCCESS,
	VOTE_FAILURE,
	VOTE_RESULT,
	VOTE_RESULT_SUCCESS,
	VOTE_RESULT_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function voteRequest(userId, movieId, token) {
	return (dispatch) => {
		dispatch(vote());

		let url = "http://localhost:8888/api/vote/";
		axios.defaults.headers.common['token'] = token;
		return axios.put(url + userId, {movieId})
			.then((res) => {
				console.log("API RES : ", res);
				dispatch(voteSuccess());
			}).catch((err) => {
				console.log("API ERR : ", err);
				dispatch(voteFailure());
			});
	}
}

export function vote() {
	return {
		type : VOTE
	}
}

export function voteSuccess() {
	return {
		type : VOTE_SUCCESS
	}
}

export function voteFailure() {
	return {
		type : VOTE_FAILURE
	}
}
export function voteResultRequest() {
	return (dispatch) => {
		dispatch(voteResult());

		let url = "http://localhost:8888/api/vote";
		return axios.get(url).then((res) => {
				console.log("API RES : ", res.data.data.rows);
				dispatch(voteResultSuccess(res.data.data.rows));
			}).catch((err) => {
				console.log("API ERR : ", err);
				dispatch(voteResultFailure());
			});
	}
}

export function voteResult() {
	return {
		type : VOTE_RESULT
	}
}

export function voteResultSuccess(data) {
	return {
		type : VOTE_RESULT_SUCCESS,
		data
	}
}

export function voteResultFailure() {
	return {
		type : VOTE_RESULT_FAILURE
	}
}
