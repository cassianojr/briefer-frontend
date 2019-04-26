import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BriefingModal from './BriefingModal';
import EditModal from './EditModal';

class BriefingItem extends Component {

	render() {

		const { briefing } = this.props;
		const { _id } = briefing;
		const time_goal = new Date(briefing.budget.time_goal).toLocaleDateString().slice(0, 10);

		const briefingToEdit = Object.assign({}, briefing);
		briefingToEdit.budget.time_goal = briefing.budget.time_goal.slice(0, 10);

		return (
			<div className="card" style={{ marginTop: '20px' }}>
				<h5 className="card-header">{briefing.proj_title}</h5>
				<div className="card-body">
					<p className="card-title"><b>Cliente: </b>{briefing.cl_name}</p>
					<p className="card-text"><b>Descrição: </b>{briefing.description}</p>
					<p className="card-text"><b>Prazo: </b>{time_goal}</p>

					<hr />
					<div className="row d-flex justify-content-center">
						<button className="btn btn-success col-3" data-toggle="modal" data-target="#viewBriefing"><span className="fas fa-eye"> </span>  <span className="d-none d-sm-inline">Visualizar</span></button>&nbsp;
						<button className="btn btn-warning col-3" data-toggle="modal" data-target={`#edit-${briefing._id}`}><span className="fas fa-pencil-alt"> </span>  <span className="d-none d-sm-inline">Editar</span> </button>&nbsp;
						<button className="btn btn-danger col-3" onClick={this.props.deleteBriefing.bind(this, _id)}><span className="far fa-trash-alt"></span>  <span className="d-none d-sm-inline">Remover</span></button>
					</div>
					<BriefingModal briefing={briefing} />
					<EditModal briefing={briefingToEdit} />
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