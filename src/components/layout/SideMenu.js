import React, { Component } from 'react'

export default class SideMenu extends Component {
	render() {
		return (

			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
			<a className="navbar-brand js-scroll-trigger" href="#page-top">
			  <span className="d-block d-lg-none">Briefer</span>
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul className="navbar-nav">
				<li className="nav-item">
				  <a className="nav-link" href="/"><i className="fas fa-home"></i> Home</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#profile"><i className="fas fa-user-circle"></i> Meu Perfil</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="/login"><i className="fas fa-sign-out-alt"></i> Sair</a>
				</li>
			  </ul>
			</div>
		  </nav>
		)
	}
}
