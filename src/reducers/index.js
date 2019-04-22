import { combineReducers } from 'redux';

import {authentication} from './authentication.reducer';
import {users} from './users.reducer';
import {briefings} from './briefings.reducer';
import notifyReducer from 'react-redux-notify';

export default combineReducers({
	notifications: notifyReducer,
	authentication,
	briefings,
	users
});