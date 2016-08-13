import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
	login : {
		status : 'INIT'
	},
	status : {
		valid : false,
		isLoggedIn : false,
		currentUserId : '',
		currentUserEmail : '',
		currentUserName : ''
	}
}

export default function authentication(state, action) {
	if(typeof state == "undefined")
		state = initialState;

	console.log("ACTION: ", action);
	switch(action.type) {
		case types.AUTH_LOGIN:
			return update(state, {
				login: {
					status: { $set : 'WAITING' }
				}
			});
		case types.AUTH_LOGIN_SUCCESS:
			return update(state, {
				login: {
					status : { $set : 'SUCCESS' }
				},
				status: {
					isLoggedIn : { $set : true },
					currentUserEmail : { $set : action.res.email },
					currentUserName : { $set : action.res.name },
					currentUserId : { $set : action.res.id }
				}
			});
		case types.AUTH_LOGIN_FAILURE:
			return update(state, {
				login : {
					status : { $set : 'FAILURE' }
				}
			});
		case types.AUTH_GET_STATUS:
			return update(state, {
				status : {
					isLoggedIn : { $set : true }
				}
			});
		case types.AUTH_GET_STATUS_SUCCESS:
			return update(state, {
				status : {
					valid : { $set : true },
					currentUserEmail : { $set : action.res.email },
					currentUserName : { $set : action.res.name },
					currentUserId : { $set : action.res.id }
				}
			});
		case types.AUTH_GET_STATUS_FAILURE:
			return update(state, {
				status : {
					valid : { $set : false },
					isLoggedIn : { $set : false },
				}
			});
		case types.AUTH_LOGOUT:
			return update(state, {
				status: {
					isLoggedIn : { $set : false },
					currentUserEmail : { $set : '' },
					currentUserName : { $set : '' },
					currentUserId : { $set : '' }
				}
			});
		default:
			return state;
	}
}
