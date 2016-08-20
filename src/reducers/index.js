import authentication from './authentication';
import item from './item';
import { vote, result } from './vote';

import { combineReducers } from 'redux';

export default combineReducers({
	authentication,
	item,
	vote,
	result
});
