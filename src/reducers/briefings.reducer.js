import { briefingConstants } from '../constants';

export function briefings(state = {}, action) {
	switch (action.type) {
		case briefingConstants.GETALL_REQUEST:
			return {
				loading: true
			};
		case briefingConstants.GETALL_SUCCESS:
			return {
				items: action.briefings
			};
		case briefingConstants.GETALL_FAILURE:
			return {
				error: action.error
			};
		case briefingConstants.CREATE_REQUEST:
			return {
				loading: true
			};
		case briefingConstants.CREATE_SUCCESS:
			return {
				success: true,
				briefing: action.briefing
			};
		case briefingConstants.CREATE_FAILURE:
			return {
				success: false
			};

		case briefingConstants.DELETE_REQUEST:
			return {
				loading: true
			};
		case briefingConstants.DELETE_SUCCESS:
			return {
				success: true,
				briefing: action.briefing
			};
		case briefingConstants.DELETE_FAILURE:
			return {
				success: false
			};
		default:
			return state;
	}
}