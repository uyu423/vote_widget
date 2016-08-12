import * as types from '../actions';
import { combineReducers } from 'redux';
import update from 'react-addons-update';

const resModalInitState = {
	showModal : false
}
const loginModalInitState = {
	showModal : false
}
const loginInitState = {
	login: {
		status: 'INIT'
	},
	status: {
		isLoggedIn: false,
		currentUserEmail: '',
		currentUserName : '',
		currentUserToken : '',
	}
}

const resModalSwitch = (state = resModalInitState, action) => {
	switch(action.type) {
		case types.RES_MODAL_ON :
			console.log(state.showModal);
			return Object.assign({}, state, {
				value: state.showModal = true
			});
		case types.RES_MODAL_OFF :
			return Object.assign({}, state, {
				value: state.showModal = false
			});
		default:
			return state;
	}
}

const loginModalSwitch = (state = loginModalInitState, action) => {
	switch(action.type) {
		case types.LOGIN_MODAL_ON :
			return Object.assign({}, state, {
				value: state.showModal = true
			});
		case types.LOGIN_MODAL_OFF :
			return Object.assign({}, state, {
				value: state.showModal = false
			});
		default:
			return state;
	}
}

/*
const loginStateSwitch = (state = loginInitState, action) => {
	switch(action.type) {
		case LOGIN_ON :
			return Object.assign({}, state, {
				value: state.loginState = true
			});
		case LOGIN_OFF :
			return Object.assign({}, state, {
				value: state.loginState = false
			});
		default:
			return state;
	}
}
*/

const loginStateFunc = (state =loginInitState, action ) => {
	switch(action.type) {
		case types.LOGIN:
			return update(state, {
				login: {
					status: { $set: 'WAITING' }
				}
			});
		case types.LOGIN_ON:
			console.log(action.data);
			return update(state, {
				login: {
					status: { $set: 'SUCCESS' }
				},
				status: {
					isLoggedIn: { $set: true },
					currentUserEmail: { $set: action.email },
					currentUserName: { $set: action.name },
					currentUserToken : { $set : action.token }
				}
			});
		case types.LOGIN_OFF:
			return update(state, {
				login: {
					status: { $set: 'FAILURE' }
				}
			});
		default:
			return state;
	}
}

const voteApp = combineReducers({
	resModal : resModalSwitch,
	loginModal : loginModalSwitch,
	loginState : loginStateFunc
});

export default voteApp;
