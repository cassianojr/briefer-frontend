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
		case briefingConstants.UPDATE_REQUEST:
			return {
				loading: true
			}
		case briefingConstants.UPDATE_SUCCESS:
			return {
				success_upd: true,
				briefing: action.briefing
			}
		case briefingConstants.UPDATE_FAILURE:
			return {
				success: false
			}
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
		case briefingConstants.SEARCH:

		
		
		const test = Object.assign({}, state, {
			filteredBriefings: state.items.filter(briefing => briefing.proj_title.includes(action.searchTerm))
		});
		
		return test;
		default:
			return state;
	}
}