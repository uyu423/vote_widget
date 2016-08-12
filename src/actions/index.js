import axios from 'axios';

export const RES_MODAL_ON = 'RES_MODAL_ON';
export const RES_MODAL_OFF = 'RES_MODAL_OFF';
export const LOGIN_MODAL_ON = 'LOGIN_MODAL_ON';
export const LOGIN_MODAL_OFF = 'LOGIN_MODAL_OFF';
export const LOGIN_ON = 'LOGIN_ON';
export const LOGIN_OFF = 'LOGIN_OFF';
export const LOGIN = 'LOGIN';

export function resModalOn() {
	console.log("resModalOn");
	return {
		type: RES_MODAL_ON
	}
}

export function resModalOff() {
	console.log("resModalOff");
	return {
		type: RES_MODAL_OFF
	}
}

export function loginModalOn() {
	return {
		type: LOGIN_MODAL_ON
	}
}

export function loginModalOff() {
	return {
		type: LOGIN_MODAL_OFF
	}
}

export function loginRequest(email) {
	console.log("loginRequest(action)");
	return (dispatch) => {
		console.log("dispath: ",  dispatch);
		dispatch(login());

		return axios.post('/api/account/login', { email })
			.then((res) => {
				console.log("api call res: ", res);
				document.cookie = 'token=' + res.data.data.token;
				dispatch(loginSuccess({
					email : res.data.data.row.email,
					name : res.data.data.row.name,
					token : res.data.data.token
				}));
			}).catch((err) => {
				console.log("api call err: ", err);
				dispatch(loginFailure());
			});
	}
}

export function login() {
	return  {
		type : LOGIN
	}
}

export function loginSuccess(res) {
	return {
		type : LOGIN_ON,
		email : res.email,
		name : res.name,
		token : res.token
	}
}

export function loginFailure() {
	return {
		type : LOGIN_OFF
	}
}
