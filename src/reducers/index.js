import { combineReducers } from 'redux';

import {authentication} from './authentication.reducer';
import {users} from './users.reducer';
import {briefings} from './briefings.reducer';

export default combineReducers({
	authentication,
	briefings,
	users
});