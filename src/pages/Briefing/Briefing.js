import React, { Component } from 'react'
import './style.css';
import TagInput from '../../components/TagInput';
import { connect } from 'react-redux';
import { briefingActions } from '../../actions';

class Briefing extends Component {

	static defaultProps = {
		briefing: {
			cl_name: '',
			cl_phone: '',
			cl_email: '',
			examples: '',
			num_pages: '',
			has_visual: false,
			has_logo: false,
			has_current: false,
			description: '',
			proj_title: '',
			social_media: '',
			outline: '',
			objective: '',
			time_goal: '',
			cost: '',
			features: []
		}
	}

	constructor(props) {
		super(props);

		this.state = {
	
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		this.setState(this.props.briefing);
	}

	changetag = (tags) => {
		var features = [];
		tags.forEach(tag => {
			features.push(tag.text);
		});
		this.setState({ features });
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	onSubmit = (e) => {
		var form = document.querySelector('.form-briefing');

		e.preventDefault();
		e.stopPropagation();

		const briefing = this.state;
		briefing.budget = {
			time_goal: briefing.time_goal,
			cost: briefing.cost
		}
		if(form.checkValidity() !== false){
			this.props.dispatch(briefingActions.create(briefing));
		}

		form.classList.add('was-validated');
	}
	render() {

		return (
			<div className="container">
				{this.props.sidebar}

				<div className="col-lg-11 float-right">
					<h3 className="mb-3">Criar novo Briefing</h3>

					<form className="needs-validation form-briefing" onSubmit={this.onSubmit} noValidate>
						<div className="mb-3">
							<label htmlFor="proj_title">Nome do Projeto</label>
							<input type="text" className="form-control" value={this.state.proj_title} onChange={this.handleChange} id="proj_title" name="proj_title" required />
							<div className="invalid-feedback">
								Por favor digite o nome do projeto
						</div>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="cl_name">Nome do Cliente</label>
								<input type="text" className="form-control" value={this.state.cl_name} onChange={this.handleChange} id="cl_name" name="cl_name" required />
								<div className="invalid-feedback">
									Digite o nome do cliente.
							</div>
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="cl_phone">Telefone do Cliente</label>
								<input type="text" className="form-control" id="cl_phone" value={this.state.cl_phone} onChange={this.handleChange} name="cl_phone" placeholder="" required data-mask="(00)00000-0000" data-mask-selectonfocus="true" />
								<div className="invalid-feedback">
									Digite o telefone do cliente.
							</div>
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="cl_email">Email do Cliente</label>
							<input type="email" className="form-control" id="cl_email" name="cl_email" value={this.state.cl_email} onChange={this.handleChange} placeholder="cleinte@example.com" />
							<div className="invalid-feedback">
								Por favor digite um e-mail válido.
						</div>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="examples">Sites/Apps de exemplo ou semelhantes</label>
								<input type="text" className="form-control" name="examples" id="examples" value={this.state.examples} onChange={this.handleChange} placeholder="Uber, Youtube, Whatsapp" required />
								<div className="invalid-feedback">
									Por favor digite um exemplo do projeto.
							</div>
							</div>

							<div className="col-md-6 mb-3">
								<label htmlFor="num_pages">Número de Páginas/Telas do site/app <span className="text-muted">(Opcional)</span></label>
								<input type="number" className="form-control" name="num_pages" id="num_pages" value={this.state.num_pages} onChange={this.handleChange} />
							</div>
						</div>

						<div className="mb-3">
							<label htmlFor="social_media">Mídias sociais do projeto <span className="text-muted">(Opcional)</span></label>
							<input type="text" className="form-control" id="social_media" placeholder="Facebook, Twitter" name="social_media" value={this.state.social_media} onChange={this.handleChange} />
						</div>
						<div className="mb-3">
							<label htmlFor="outline">Por que criar esse projeto? Quais são suas necessidades? Quais pessoas você deseja atingir?</label>
							<input type="text" className="form-control" id="outline" name="outline" value={this.state.outline} onChange={this.handleChange} required />
							<div className="invalid-feedback">
								Responda as perguntas para o esboço do projeto.
						</div>
						</div>
						<div className="mb-3">
							<label htmlFor="objective">Qual o objetivo do projeto?</label>
							<input type="text" className="form-control" id="objective" value={this.state.objective} onChange={this.handleChange} name="objective" required />
							<div className="invalid-feedback">
								Digite o objetivo do projeto.
						</div>
						</div>
						<div className="mb-3">
							<label htmlFor="description">Descreva o projeto detalhadamente</label>
							<textarea className="form-control" id="description" value={this.state.description} onChange={this.handleChange} name="description" required />
							<div className="invalid-feedback">
								Digite a descrição do projeto.
						</div>
						</div>

						<div className="mb-3">
							<label htmlFor="features">Quais são as características principais do projeto?</label>
							<label htmlFor="features"><span className="text-muted">(Ex.: Fácil Manutenção, Conteúdo Dinâmico)</span></label>
							<TagInput changeTag={this.changetag} />
						</div>

						<div className="custom-control custom-checkbox">
							<input type="checkbox" name="has_visual" className="custom-control-input" id="has_visual" value={this.state.has_visual} onChange={this.handleChange} />
							<label className="custom-control-label" htmlFor="has_visual">Possui Identidade visual. (Ex.: Mockup, wireframe)</label>
						</div>
						<div className="custom-control custom-checkbox">
							<input type="checkbox" name="has_logo" className="custom-control-input" id="has_logo" value={this.state.has_logo} onChange={this.handleChange} />
							<label className="custom-control-label" htmlFor="has_logo">Possui uma logo.</label>
						</div>
						<div className="custom-control custom-checkbox">
							<input type="checkbox" name="has_current" className="custom-control-input" id="has_current" value={this.state.has_current} onChange={this.handleChange} />
							<label className="custom-control-label" htmlFor="has_current">Já possui um site que deseja fazer redesign/dar manutenção.</label>
						</div>
						<div className="row">
							<div className="col-md-6 mb-3">
								<label htmlFor="time_goal">Prazo</label>
								<input type="date" className="form-control" name="time_goal" id="time_goal" value={this.state.time_goal} onChange={this.handleChange} required />
								<div className="invalid-feedback">
									Por favor digite o prazo do projeto.
							</div>
							</div>

							<div className="col-md-6 mb-3">
								<label htmlFor="cost">Custo</label>
								<input type="number" className="form-control" name="cost" id="cost" required value={this.state.cost} onChange={this.handleChange} />
								<div className="invalid-feedback">
									Por favor digite o custo do projeto.
							</div>
							</div>
						</div>
						<hr className="mb-4" />
						<button className="btn btn-primary btn-lg btn-block" type="submit"><span className="fas fa-plus-circle"></span> Criar Briefing</button>
						<br />
					</form>

				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { briefings } = state;
	return { briefings };
}

export default connect(mapStateToProps)(Briefing);
