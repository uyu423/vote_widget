import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
	items : {
		status : 'INIT',
		data: []
	}
};

export default function item(state, action) {
	if(state === undefined) {
		state = initialState;
	}
	switch(action.type) {
		case types.ITEM_LIST:
			return update(state, {
				items : {
					status : { $set : 'WAITING' }
				}
			});
		case types.ITEM_LIST_SUCCESS:
			return update(state, {
				items : {
					status : { $set : 'SUCCESS' },
					data : { $set: action.data }
				}
			});
		case types.ITEM_LIST_FAILURE:
			return update(state, {
				items : {
					status : { $set : 'FAILURE' }
				}
			});
		default:
			return state;
	}
}
