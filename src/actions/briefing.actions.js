import { briefingConstants } from '../constants';
import { briefingService } from '../services';
import { history } from '../helpers';

const getAll = () => dispatch => {
	dispatch(request());
	briefingService.getAll()
		.then(
			briefings => dispatch(success(briefings)),
			error => dispatch(failure(error))
		);

	function request(briefings) { return { type: briefingConstants.GETALL_REQUEST, briefings } }
	function success(briefings) { return { type: briefingConstants.GETALL_SUCCESS, briefings } }
	function failure(error) { return { type: briefingConstants.GETALL_FAILURE, error } }
}

const create = (briefing)=> dispatch =>{
	dispatch(request(briefing));

	briefingService.create(briefing)
	.then(briefing=>{
		dispatch(success(briefing));
		history.push('/');
	}).catch(error=> dispatch(failure(error)));
	
	function request(briefing) { return { type: briefingConstants.CREATE_REQUEST, briefing } }
	function success(briefing) { return { type: briefingConstants.CREATE_SUCCESS, briefing } }
	function failure(error) { return { type: briefingConstants.CREATE_FAILURE, error } }
}

const deleteBriefing = (id_briefing)=>dispatch=>{
	dispatch(request(id_briefing));

	briefingService.deleteBriefing(id_briefing)
	.then(briefing=>{
		dispatch(success(briefing));
		history.push('/');
	}).catch(error=> dispatch(failure(error)));
	
	function request(id_briefing) { return { type: briefingConstants.DELETE_REQUEST, id_briefing } }
	function success(id_briefing) { return { type: briefingConstants.DELETE_SUCCESS, id_briefing } }
	function failure(error) { return { type: briefingConstants.DELETE_FAILURE, error } }
}

export const briefingActions = {
	getAll,
	create,
	deleteBriefing
}