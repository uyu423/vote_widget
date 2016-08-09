export const RES_MODAL_ON = 'RES_MODAL_ON';
export const RES_MODAL_OFF = 'RES_MODAL_OFF';
export const LOGIN_MODAL_ON = 'LOGIN_MODAL_ON';
export const LOGIN_MODAL_OFF = 'LOGIN_MODAL_OFF';

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
