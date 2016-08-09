import { RES_MODAL_ON, RES_MODAL_OFF, LOGIN_MODAL_ON, LOGIN_MODAL_OFF } from '../actions';
import { combineReducers } from 'redux';

const resModalInitState = {
	showModal : false
}
const loginModalInitState = {
	showModal : false
}

const resModalSwitch = (state = resModalInitState, action) => {
	switch(action.type) {
		case RES_MODAL_ON :
			console.log(state.showModal);
			return Object.assign({}, state, {
				value: state.showModal = true
			});
		case RES_MODAL_OFF :
			return Object.assign({}, state, {
				value: state.showModal = false
			});
		default:
			return state;
	}
}

const loginModalSwitch = (state = loginModalInitState, action) => {
	switch(action.type) {
		case LOGIN_MODAL_ON :
			return Object.assign({}, state, {
				value: state.showModal = true
			});
		case LOGIN_MODAL_OFF :
			return Object.assign({}, state, {
				value: state.showModal = false
			});
		default:
			return state;
	}
}

const voteApp = combineReducers({
	resModal : resModalSwitch,
	loginModal : loginModalSwitch
});

export default voteApp;
