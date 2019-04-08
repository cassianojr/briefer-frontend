import { userConstants } from '../constants';

const initialState = {};

export function authentication(state = initialState, action) {
	switch (action.type) {
		case userConstants.CREATE_REQUEST:
			return {
				creating: true,
				item: action.user
			};
		case userConstants.CREATE_SUCCESS:
			return{
				create: true,
				user: action.user
			};
		case userConstants.CREATE_FAILURE:
			return {};
		default:
			return state;
	}
}