import React, { Component } from 'react';

import print1 from './img/img_showcase_1.png';
import print2 from './img/img_showcase_2.png';
import logo from './img/logo.png';

class Index extends Component {

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-light probootstrap-megamenu probootstrap-navbar">
					<div className="container">

						<a className="navbar-brand" href="/"><img src={logo} alt="Briefer logo" /></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse"
							aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div id="navbar-collapse" className="collapse navbar-collapse">
							<ul className="navbar-nav ml-auto">
								<li className="probootstra-cta-button"><a href="/login" className="btn">Entrar</a></li>
								<li className="probootstra-cta-button last"><a href="/sign-up" className="btn btn-ghost">Cadastre-se</a></li>
							</ul>
						</div>
					</div>
				</nav>

				<section className="probootstrap-hero">
					<div className="container">
						<div className="row justify-content-md-center">
							<div
								className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 text-center probootstrap-hero-text pb0 probootstrap-animate"
								data-animate-effect="fadeIn">
								<h1>Gerencie facilmente o briefing de todos os seus projetos!</h1>
								<p>Sabe aquelas perguntas padrões que se faz em todos os projetos para ajudar no planejamento? O Briefer te
            ajuda a padronizar essas perguntas e juntar todos os seus projetos em um único lugar!</p>
								<p>
									<button className="btn btn-primary btn-lg">Cadastre-se agora mesmo!</button>
								</p>
							</div>
						</div>

						<div className="row probootstrap-feature-showcase">
							<div className="col-md-4 col-md-push-8 probootstrap-showcase-nav probootstrap-animate">
								<ul>
									<li className="active">
										<a href="#showcase1">As perguntas certas para o seu Briefing</a>
										<p>Você pode responder as perguntas relacionadas ao Briefing como: Contatos do Cliente, informações do
                projeto, custos e muito mais!</p>
									</li>
									<li>
										<a href="#showcase2">Gerencie seus projetos em tempo real</a>
										<p>Gerencie de forma prática todos os seus projetos atuais, você pode editar ou até mesmo remover um
                projeto antigo.</p>
									</li>
									<li>
										<a href="#showcase3">Tudo na palma da sua mão</a>
										<p>Com o aplicativo Android do Briefer você consegue gerenciar seus briefings em qualquer lugar!</p>
									</li>
								</ul>
							</div>
							<div className="col-md-8 col-md-pull-4 probootstrap-animate" style={{position: 'relative'}}>
								<div className="probootstrap-home-showcase-wrap">
									<div className="probootstrap-home-showcase-inner">
										<div className="probootstrap-chrome">
											<div><span></span><span></span><span></span></div>
										</div>
										<div className="probootstrap-image-showcase">
											<ul className="probootstrap-images-list">
												<li className="active"><img src={print1} alt="showcase 1" className="img-responsive" /></li>
												<li><img src={print2} alt="showcase 2" className="img-responsive" /></li>
												<li><img src={print1} alt="showcase 1" className="img-responsive" /></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="probootstrap-section probootstrap-bg-white probootstrap-zindex-above-showcase">
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate"
								data-animate-effect="fadeIn">
								<h2>Principais características</h2>
							</div>
						</div>

						<div className="row probootstrap-gutter60 justify-content-md-center">
							<div className="col-md-4 probootstrap-animate" data-animate-effect="fadeInLeft">
								<div className="service text-center">
									<div className="icon"><i className="icon-mobile3"></i></div>
									<div className="text">
										<h3>Multiplataforma</h3>
										<p>A plataforma Briefer funciona em qualquer dispositivo, porém demos ênfase ao aplicativo Android.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 probootstrap-animate" data-animate-effect="fadeInRight">
								<div className="service text-center">
									<div className="icon"><i className="fas fa-project-diagram"></i></div>
									<div className="text">
										<h3>Gerencie seus projetos</h3>
										<p>Gerencie as informações de todos os seus projetos facilmente!</p>
									</div>
								</div>
							</div>

							<div className="col-md-4 probootstrap-animate" data-animate-effect="fadeInLeft">
								<div className="service text-center">
									<div className="icon"><i className="fab fa-github"></i></div>
									<div className="text">
										<h3>Totalmente open source</h3>
										<p>O Briefing é totalmente open source e você poderá utilizá-lo de forma gratuita!</p>
									</div>
								</div>
							</div>

							<div className="col-md-4 probootstrap-animate" data-animate-effect="fadeInRight">
								<div className="service text-center">
									<div className="icon"><i className="icon-browser2"></i></div>
									<div className="text">
										<h3>Acesso offline</h3>
										<p>Através do aplicativo Android você pode gerenciar todos os seus briefings de forma offline e
                sincronizar-los quando quiser!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="probootstrap-section probootstrap-zindex-above-showcase">
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate"
								data-animate-effect="fadeIn">
								<h2>Gostou do projeto? <br />Ajude-nos a melhorar!</h2>
								<p className="lead">Você pode nos ajudar acessando o <a
									href="https://github.com/cassianojr/briefer-api">repositório oficial do projeto no github</a>, lá você
								  poderá sugerir melhorias, informar bugs ou até mesmo trabalhar no Briefer! Além disso, se desejar
            desenvolver alguma aplicação com a nossa API, você encontrará toda a documentação necessária para isso no <a href="#apiDoc">site oficial</a> da API Briefer!</p>
							</div>
						</div>
					</div>
				</section>

				<footer className="probootstrap-footer">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="row">
									<div className="col-md-4 probootstrap-animate">
										<div className="probootstrap-footer-widget">
											<h3>Links</h3>
											<ul>
												<li><a href="#oficialRepository">Repositório Oficial da API</a></li>
												<li><a href="#oficialRepository">Repositório Oficial do Frontend</a></li>
												<li><a href="#oficialRepository">Documentação Oficial do Briefer</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 probootstrap-animate">
								<div className="probootstrap-footer-widget">
									<h3>Sobre o autor</h3>
									<p>Este projeto foi desenvolvido principalmente por <a href="#author">Cassiano Junior</a>.</p>
									<ul className="probootstrap-footer-social">
										<li><a href="#twitter"><i className="icon-twitter"></i></a></li>
										<li><a href="#github"><i className="icon-github"></i></a></li>
										<li><a href="#linkedin"><i className="icon-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 copyright probootstrap-animate">
								<p>&copy; 2019All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Index;
