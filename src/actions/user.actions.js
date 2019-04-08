import { userConstants } from '../constants';
import { userService } from '../services/user.service';
import { history } from '../helpers';

const login = (email, password) => dispatch => {
	dispatch(request({ email }));
	
	userService.login(email, password)
		.then(user => {
			history.push('/');
			dispatch(success(user));
		}).catch(error => {
			dispatch(failure(error));
		});

	function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	function failure(user) { return { type: userConstants.LOGIN_FAILURE, user } }
}

const logout = () => {
	userService.logout();
	return { type: userConstants.LOGOUT }
}

const create = (user) => dispatch =>{
	dispatch(request(user));

	userService.create(user)
	.then(user=>{
		history.push('/');
		dispatch(success(user));
	}).catch(error=>{
		dispatch(failure(error));
	});

	function request(user) { return { type: userConstants.CREATE_REQUEST, user } }
	function success(user) { return { type: userConstants.CREATE_SUCCESS, user } }
	function failure(user) { return { type: userConstants.CREATE_FAILURE, user } }
}

export const userActions = {
	login,
	logout,
	create
};