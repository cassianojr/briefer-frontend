import React, { Component } from 'react';

import { connect } from 'react-redux';
import { userActions } from '../../actions';

import './styles.css';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.props.dispatch(userActions.logout());

		this.state = {
			email: '',
			password: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { email, password } = this.state;
		const { dispatch } = this.props;
		if (email && password) {
			dispatch(userActions.login(email, password));
		}
	}

	render() {
		const { email, password } = this.state;

		return (
			<div>
				<form className="form-signin" onSubmit={this.handleSubmit}>

					<h1 className="h3 mb-3 font-weight-normal">Por favor faça login</h1>

					<label htmlFor="inputEmail" className="sr-only" >Endereço de email</label>
					<input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email"  value={email} onChange={this.handleChange} />
					
					<label htmlFor="inputPassword" className="sr-only">Senha</label>
					<input type="password" name="password" id="inputPassword" className="form-control" placeholder="Senha"  value={password} onChange={this.handleChange} />
					
					<button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
					
					<a href="/sign-up">Cadastre-se</a>

					<p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(SignIn);
