import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Briefing } from '../../pages/Briefing';

export default class SideMenu extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
						<Link className="navbar-brand js-scroll-trigger" to={'/'}>
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
									<a className="nav-link" href='/login'><i className="fas fa-sign-out-alt"></i> Sair</a>
								</li>
							</ul>
						</div>
					</nav>
					<div>
						<Route path={'/'} exact component={Home} />
						<Route path={'/new_briefing'} component={Briefing} />
					</div>
				</div>
			</Router>
		);
	}
}
