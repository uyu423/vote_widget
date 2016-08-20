import {
	ITEM_LIST,
	ITEM_LIST_SUCCESS,
	ITEM_LIST_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function itemListRequest() {
	return (dispatch) => {
		dispatch(itemList());

		return axios.get("/api/movie").then((res) => {
			dispatch(itemListSuccess(res.data.data.rows));
		}).catch((err) => {
			alert("영화 목록을 불러오는데 실패하였습니다...");
			dispatch(itemListFailure());
		});
	}
}

export function itemList() {
	return {
		type : ITEM_LIST
	};
}

export function itemListSuccess(data) {
	return {
		type : ITEM_LIST_SUCCESS,
		data
	};
}

export function itemListFailure() {
	return {
		type : ITEM_LIST_FAILURE
	};
}
