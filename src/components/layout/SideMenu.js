import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Briefs } from '../../pages/Briefs';

import { Briefing } from '../../pages/Briefing';
import { Profile } from '../../pages/Profile';

import logo from '../img/logo.png';

export default class SideMenu extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
						<a className="navbar-brand" href="/">
							<span className="d-none d-lg-block">
								<img className="img-fluid img-profile" src={logo} alt="" />
							</span>
						</a>
						<Link className="navbar-brand" to={'/briefs'}>
							<span className="d-block d-lg-none">Briefer</span>
						</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to={'/'}><i className="fas fa-home"></i> Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={'/new_briefing'}><i className="fas fa-plus-circle"></i> Novo Briefing</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={'/profile'}><i className="fas fa-user-circle"></i> Meu Perfil</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href='/'><i className="fas fa-sign-out-alt"></i> Sair</a>
								</li>
							</ul>
						</div>
					</nav>
					<div>
						<Route path={'/briefs'} exact component={Briefs} />
						<Route path={'/new_briefing'} exact component={Briefing} />
						<Route path={'/profile'} exact component={Profile} />
					</div>
					<div className="d-lg-none d-sm-block" style={{marginTop: '35px'}}></div>

				</div>
			</Router>
		);
	}
}
