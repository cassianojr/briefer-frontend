import React, { Component } from 'react';

import { connect } from 'react-redux';
import Footer from '../../components/layout/Footer';
import { userActions } from '../../actions';

import './styles.css';

class SignUp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: ''
		}

		this.emailField = React.createRef();

		this.onChange = this.onChange.bind(this);
		this.verifyEmail = this.verifyEmail.bind(this);
	}

	onChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	onSubmit = (e) => {
		var form = document.querySelector('.form-sign-up');
		e.preventDefault();
		e.stopPropagation();

		const { dispatch } = this.props;

		const user = this.state;

		if (form.checkValidity() !== false) {
			dispatch(userActions.create(user));
		}

		form.classList.add('was-validated');
	}

	verifyEmail() {
		const { email } = this.state;

		if (email) {
			const { dispatch } = this.props;
			dispatch(userActions.verifyIfEmailExists(email));
		}
	}

	componentDidUpdate(){
		const {props } = this,
		{users} = props;
		
		if(users.exists){
			this.emailField.current.setCustomValidity("email exists");
		}
	}

	render() {
		const { state,props } = this,
		{users} = props;
		return (
			<div className="container">
				<div className="py-5 text-center">
					<h2>Cadastre-se no Briefer!</h2>
					<p className="lead">Uma experiência totalmente nova te espera!</p>
				</div>

				<div>
					<form className="needs-validation form-sign-up" onSubmit={this.onSubmit} noValidate>
						<div className="col-md-12 mb-3">
							<label htmlFor="name">Nome</label>
							<input type="text" className="form-control" id="name" name="name" value={state.name} onChange={this.onChange} required />
							<div className="invalid-feedback">
								Digite um nome válido.
							</div>
						</div>

						<div className="col-md-12 mb-3">
							<label htmlFor="email">Email</label>
							<input type="email" ref={this.emailField} onBlur={this.verifyEmail} name="email" className="form-control" value={state.email} onChange={this.onChange} id="email" placeholder="you@example.com" required />
							<div className="invalid-feedback">
								{(users.exists)? "Este e-mail já está registrado!" : "Digite um e-mail válido!"}
							</div>
						</div>

						<div className="col-md-12 mb-3">
							<label htmlFor="password">Senha</label>
							<input type="password" name="password" value={state.password} onChange={this.onChange} className="form-control" id="password" required />
							<div className="invalid-feedback">
								Digite uma senha válida
							</div>
						</div>
						<hr></hr>
						<button className="btn btn-primary btn-lg" type="submit">Cadastre-se</button>
					</form>
				</div>
				<Footer />
			</div>
		)
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

export default connect(mapStateToProps)(SignUp);
