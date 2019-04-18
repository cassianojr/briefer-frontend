import { userConstants } from '../constants';

export function users(state = {}, action) {
	switch (action.type) {
		case userConstants.CREATE_REQUEST:
			return {
				creating: true,
				item: action.user
			};
		case userConstants.CREATE_SUCCESS:
			return {
				create: true,
				user: action.user
			};
		case userConstants.CREATE_FAILURE:
			return {};
		case userConstants.UPDATE_REQUEST:
			return {
				updating: true,
				user: action.user
			}
		case userConstants.UPDATE_SUCCESS:
			return {
				updated: true,
				user: action.user
			}
		case userConstants.UPDATE_FAILURE:
			return {}
		case userConstants.EMAIL_VERIFY_REQUEST:
			return {
				loading: true
			}
		case userConstants.EMAIL_EXISTS:
			return {
				exists: true,
				email: action.email
			}
		case userConstants.EMAIL_NOT_EXISTS:
			return {
				exists: false,
				email: action.email
			}
		default:
			return state;
	}
}