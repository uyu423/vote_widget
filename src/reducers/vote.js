import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const voteInitialState = {
	status : 'INIT'
};

const resultInitialState = {
	status : 'INIT',
	data : [],
}

export function vote(state, action) {
	if(state == undefined) {
		state = voteInitialState;
	}
	switch(action.type) {
		case types.VOTE:
			return update(state, {
				status : { $set : 'WAITING' }
			});
		case types.VOTE_SUCCESS:
			//console.log("VOTE_SUCCESS : ", state);
			return update(state, {
				status : { $set : 'SUCCESS' }
			});
		case types.VOTE_FAILURE:
			return update(state, {
				status : { $set : 'FAILURE' }
			});
		default:
			return state;
	}
}

export function result(state, action) {
	if(state == undefined) {
		state = resultInitialState;
	}
	switch(action.type) {
		case types.VOTE_RESULT:
			return update(state, {
				status : { $set : 'WAITING' }
			});
		case types.VOTE_RESULT_SUCCESS:
			return update(state, {
				status : { $set : 'SUCCESS' },
				data : { $set : action.data }
			});
		case types.VOTE_RESULT_FAILURE:
			return update(state, {
				status : { $set : 'FAILURE' }
			});
		default:
			return state;
	}
}

