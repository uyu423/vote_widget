import axios from 'axios';
import {
	AUTH_LOGIN,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_GET_STATUS,
	AUTH_GET_STATUS_SUCCESS,
	AUTH_GET_STATUS_FAILURE,
	AUTH_LOGOUT
} from './ActionTypes';

export function loginRequest(email) {
	return (dispatch) => {
		dispatch(login());

		return axios.post('/api/account/login', { email })
			.then((res) => {
				//success
				dispatch(loginSuccess({
					email : res.data.data.row.email,
					name : res.data.data.row.name,
					id : res.data.data.row.id,
					token : res.data.data.token
				}));
			}).catch((err) => {
				//failed
				dispatch(loginFailure());
			});
	}
}

export function getStatusRequest(token) {
	return (dispatch) => {
		dispatch(getStatus());

		return axios.get('/api/account', { headers: {'token' : token} })
			.then((res) => {
				dispatch(getStatusSuccess({
					res : res.data.data
				}));
			}).catch((err) => {
				dispatch(getStatusFailre());
			});
	}
}

export function getStatus() {
	return {
		type : AUTH_GET_STATUS
	};
}

export function getStatusSuccess(res) {
	return {
		type : AUTH_GET_STATUS_SUCCESS,
		res : res.res
	};
}

export function getStatusFailre() {
	return {
		type : AUTH_GET_STATUS_FAILURE
	};
}

export function login() {
	return {
		type : AUTH_LOGIN
	};
}

export function loginSuccess(res) {
	document.cookie = "token=" + res.token;
	console.log(res);
	return {
		type : AUTH_LOGIN_SUCCESS,
		res : res
	};
}

export function loginFailure() {
	return {
		type : AUTH_LOGIN_FAILURE,
	};
}

export function logoutSuccess() {
	let expireDate = new Date();
	expireDate.setDate((new Date()).getDate() - 1);
	document.cookie = "token=;expires=" + expireDate;
	return {
		type : AUTH_LOGOUT
	}
}
