import React, { Component } from 'react';

import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Profile extends Component {
	constructor(props) {
		super(props);

		const user = JSON.parse(localStorage.getItem("user")),
			{ name, id, email } = user;
		this.state = {
			name,
			id,
			email,
			old_password: '',
			new_password: '',
			confirm_password: '',
		}

		this.oldPasswordField = React.createRef();
		this.newPasswordField = React.createRef();
		this.confirmPasswordField = React.createRef();

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	onSubmit(e) {
		const form = document.querySelector('.from-profile');
		e.preventDefault();
		e.stopPropagation();

		const { name, email, old_password, new_password, confirm_password } = this.state,
			user = { name, email, old_password, new_password, confirm_password };

		const {dispatch} = this.props;

		//passwords validation
		if (new_password !== '' && confirm_password !== '') {
			if (old_password === '') {
				this.oldPasswordField.current.setCustomValidity("You need to type the old password.");
			}

			if (new_password !== confirm_password) {
				this.newPasswordField.current.setCustomValidity("Passwords don't match");
				this.confirmPasswordField.current.setCustomValidity("Passwords don't match");
			}
		}

		if (form.checkValidity() !== false) {
			dispatch(userActions.update(user));
		}

		form.classList.add('was-validated');
	}

	render() {
		const { state } = this;
		return (
			<div className="container">
				<div className="col-lg-11 float-right">
					<h1 style={{ textAlign: 'center' }}>{state.name}</h1>
					<p>Aqui você pode editar as informações do seu perfil!</p>
					<form className="needs-validation from-profile" onSubmit={this.onSubmit} noValidate>
						<div className="col-md-12 mb-3">
							<label htmlFor="name">Nome</label>
							<input type="text" className="form-control" id="name" name="name" value={state.name} onChange={this.onChange} />
						</div>

						<div className="col-md-12 mb-3">
							<label htmlFor="email">Email</label>
							<input type="email" ref={this.emailField} name="email" className="form-control" value={state.email} onChange={this.onChange} id="email" placeholder="you@example.com" />
						</div>

						<div className="col-md-12 mb-3">
							<label htmlFor="password">Senha Antiga</label>
							<input type="password" ref={this.oldPasswordField} name="old_password" value={state.password} onChange={this.onChange} className="form-control" id="old-password" />
							<div className="invalid-feedback">
								Digite uma senha válida
							</div>
						</div>
						<div className="col-md-12 mb-3">
							<label htmlFor="password">Senha Nova</label>
							<input type="password" ref={this.newPasswordField} name="new_password" value={state.password} onChange={this.onChange} className="form-control" id="new-password" />
							<div className="invalid-feedback">
								As senhas não correspondem.
							</div>
						</div>
						<div className="col-md-12 mb-3">
							<label htmlFor="password">Confirmar Senha Nova</label>
							<input type="password" ref={this.confirmPasswordField} name="confirm_password" value={state.password} onChange={this.onChange} className="form-control" id="confirm-password" />
							<div className="invalid-feedback">
								As senhas não correspondem.
							</div>
						</div>
						<hr></hr>
						<button className="btn btn-primary btn-lg" type="submit">Salvar</button>
					</form>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	const { authentication, users } = state;
	const { user } = authentication;

	return {
		user,
		users
	}
}

export default connect(mapStateToProps)(Profile);