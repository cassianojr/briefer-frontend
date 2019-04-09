import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BriefingItem extends Component {

	render() {

		const { briefing } = this.props;
		const { _id } = briefing;
		const time_goal = new Date(briefing.budget.time_goal).toLocaleDateString();
		return (
			<div className="card" style={{ marginTop: '20px' }}>
				<h5 className="card-header">{briefing.proj_title}</h5>
				<div className="card-body">
					<p className="card-title"><b>Cliente: </b>{briefing.cl_name}</p>
					<p className="card-text"><b>Descrição: </b>{briefing.description}</p>
					<p className="card-text"><b>Prazo: </b>{time_goal}</p>

					<button className="btn btn-success" data-toggle="modal" data-target="#exampleModal"><span className="fas fa-eye"> </span> Visualizar </button>&nbsp;
					<button className="btn btn-warning"><span className="fas fa-pencil-alt"> </span> Editar </button>&nbsp;
					<button className="btn btn-danger" onClick={this.props.deleteBriefing.bind(this, _id)}><span className="far fa-trash-alt"></span> Remover</button>


					<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">{briefing.proj_title}</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<p><b>Cliente: </b>{briefing.cl_name}</p>
									<p><b>Telefone do Cliente: </b>{briefing.cl_phone}</p>
									<p><b>Email do Cliente: </b>{briefing.cl_email}</p>
									<p><b>Sites/Apps de Exemplo: </b>{briefing.examples}</p>
									<p><b>Numero de Páginas: </b>{briefing.num_pages}</p>
									<p><b>Descrição: </b>{briefing.description}</p>
									<p><b>Prazo: </b>{time_goal}</p>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

BriefingItem.propTypes = {
	briefing: PropTypes.object.isRequired,
	deleteBriefing: PropTypes.func.isRequired
}

export default BriefingItem;