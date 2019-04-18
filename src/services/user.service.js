import { authHeader } from '../helpers';

export const userService = {
	login,
	logout,
	getAll,
	create,
	update,
	verifyIfEmailExists
};

function login(email, password) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password })
	};

	return fetch('/api/users/login', requestOptions)
		.then(handleResponse)
		.then(user => {
			if (user.token) {
				localStorage.setItem('user', JSON.stringify(user));
			}

			return user;
		});
}

function verifyIfEmailExists(email) {
	return fetch(`/api/users/user/email/${email}`)
		.then(response => response.json())
		.then(userFinded => {
			return (userFinded != null);
		});
}

function create(user) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(user)
	}

	return fetch('/api/users', requestOptions)
		.then(user => {
			return user;
		});
}

function update(user){
	const requestOptions = {
		method: 'PUT',
		headers: authHeader(),
		body: JSON.stringify(user)
	}

	return fetch('/api/users/update', requestOptions)
	.then(user=> {
		return user
	});
}

function logout() {
	localStorage.removeItem('user');
}

function getAll() {
	const requestOptions = {
		method: 'GET',
		headers: authHeader()
	};

	return fetch('/api/users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
	return response.json().then(json => {
		const data = json;
		if (!response.ok) {
			if (response.status === 401) {
				logout();
				Location.reload(true);
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}
		return data;
	});
}