import { authHeader } from '../helpers';

function getAll(){
	const requestOptions = {
		method: 'GET',
		headers: authHeader()
	};

	return fetch('/api/briefings', requestOptions).then(handleResponse);
}

function create(briefing){
	const requestOptions = {
		method: 'POST',
		headers: authHeader(),
		body: JSON.stringify(briefing)
	}

	return fetch('/api/briefings', requestOptions)
	.then(briefing=>{
		return briefing;
	});
}

function update(briefing){
	const requestOptions ={
		method: 'PUT',
		headers: authHeader(),
		body: JSON.stringify(briefing)
	}

	return fetch('/api/briefings', requestOptions).then(handleResponse);
}

function deleteBriefing(_id){
	const requestOptions = {
		method: 'DELETE',
		headers: authHeader(),
		body: JSON.stringify({_id})
	}

	return fetch('/api/briefings', requestOptions)
	.then(response=>{
		return response;
	});
}

function handleResponse(response) {
	return response.json().then(json => {
		const data = json;
		if (!response.ok) {

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}

export const briefingService ={
	getAll,
	create,
	update,
	deleteBriefing
}