import { briefingConstants } from '../constants';
import { briefingService } from '../services';
import { history, NotificationHelper } from '../helpers';

import { createNotification } from 'react-redux-notify';

const getAll = () => dispatch => {
	dispatch(request());
	briefingService.getAll()
		.then(
			briefings => dispatch(success(briefings)),
			error => dispatch(failure(error))
		);

	function request(briefings) { return { type: briefingConstants.GETALL_REQUEST, briefings } }
	function success(briefings) { return { type: briefingConstants.GETALL_SUCCESS, briefings } }
	function failure(error) {
		const optionsNotification = NotificationHelper.error("Erro ao procurar no banco de dados!");
		dispatch(createNotification(optionsNotification));

		return { type: briefingConstants.GETALL_FAILURE, error }
	}
}

const search = (searchTerm) => dispatch => {

	return dispatch({ type: briefingConstants.SEARCH, searchTerm });
}

const create = (briefing) => dispatch => {
	dispatch(request(briefing));

	briefingService.create(briefing)
		.then(briefing => {
			dispatch(success(briefing));
			history.push('/create_briefing');
			history.push('/briefs');
		}).catch(error => dispatch(failure(error)));

	function request(briefing) { return { type: briefingConstants.CREATE_REQUEST, briefing } }
	function success(briefing) {
		const optionsNotification = NotificationHelper.success("Briefing criado com sucesso!");
		dispatch(createNotification(optionsNotification));

		return { type: briefingConstants.CREATE_SUCCESS, briefing }
	}
	function failure(error) {
		const optionsNotification = NotificationHelper.error("Erro ao criar briefing!");
		dispatch(createNotification(optionsNotification));

		return { type: briefingConstants.CREATE_FAILURE, error }
	}
}

const update = (briefing) => dispatch => {
	dispatch(request(briefing));

	briefingService.update(briefing)
		.then(briefing => {
			history.push('/update_briefing');
			history.push('/briefs');
			dispatch(success(briefing));
		}).catch(error => dispatch(failure(error)));

	function request(briefing) { return { type: briefingConstants.UPDATE_REQUEST, briefing } }
	function success(briefing) {
		const optionsNotification = NotificationHelper.success("Briefing atualizado com sucesso!");
		dispatch(createNotification(optionsNotification));

		return { type: briefingConstants.UPDATE_SUCCESS, briefing }
	}
	function failure(error) {
		const optionsNotification = NotificationHelper.error("Erro ao atualizar briefing!");
		dispatch(createNotification(optionsNotification));

		return { type: briefingConstants.UPDATE_FAILURE, error }
	}
}

const deleteBriefing = (id_briefing) => dispatch => {
	dispatch(request(id_briefing));

	briefingService.deleteBriefing(id_briefing)
		.then(briefing => {
			dispatch(success(briefing));
			history.push('/delete_briefing');
			history.push('/briefs');
		}).catch(error => dispatch(failure(error)));

	function request(id_briefing) { return { type: briefingConstants.DELETE_REQUEST, id_briefing } }

	function success(id_briefing) {
		const optionsNotification = NotificationHelper.success("Briefing deletado com sucesso!");
		dispatch(createNotification(optionsNotification));

		return { type: briefingConstants.DELETE_SUCCESS, id_briefing }
	}

	function failure(error) {
		const optionsNotification = NotificationHelper.error("Erro ao deletar briefing!");
		dispatch(createNotification(optionsNotification));

		return { type: briefingConstants.DELETE_FAILURE, error }
	}
}

export const briefingActions = {
	getAll,
	create,
	update,
	deleteBriefing,
	search
}