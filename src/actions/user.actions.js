import { userConstants } from '../constants';
import { userService } from '../services/user.service';
import { history } from '../helpers';

const login = (email, password) => dispatch => {
	dispatch(request({ email }));

	userService.login(email, password)
		.then(user => {
			history.push('/briefs');
			dispatch(success(user));
		}).catch(error => {
			dispatch(failure(error));
		});

	function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
	function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
	function failure(user) { return { type: userConstants.LOGIN_FAILURE, user } }
}

const verifyIfEmailExists = (email) => dispatch => {
	dispatch(request(email));

	userService.verifyIfEmailExists(email)
		.then(exists => {
			dispatch((exists) ? emailExists(email) : emailNotExists(email));
		});

	function request(email) { return { type: userConstants.EMAIL_VERIFY_REQUEST, email } }
	function emailExists(email) { return { type: userConstants.EMAIL_EXISTS, email } }
	function emailNotExists(email) { return { type: userConstants.EMAIL_NOT_EXISTS, email } }
}

const logout = () => {
	userService.logout();
	return { type: userConstants.LOGOUT }
}

const create = (user) => dispatch => {
	dispatch(request(user));

	userService.create(user)
		.then(user => {
			dispatch(success(user));
			history.push('/briefs');
		}).catch(error => {
			dispatch(failure(error));
		});

	function request(user) { return { type: userConstants.CREATE_REQUEST, user } }
	function success(user) { return { type: userConstants.CREATE_SUCCESS, user } }
	function failure(user) { return { type: userConstants.CREATE_FAILURE, user } }
}

const update = (user) => dispatch => {
	dispatch(request(user));

	userService.update(user)
		.then(user => {
			dispatch(success(user));
			history.push('/login');
		}).catch(error => dispatch(failure(error)));

	function request(user) { return { type: userConstants.UPDATE_REQUEST, user } }
	function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
	function failure(user) { return { type: userConstants.UPDATE_FAILURE, user } }
}

export const userActions = {
	login,
	logout,
	create,
	update,
	verifyIfEmailExists
};