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

					<button className="btn btn-success" data-toggle="modal" data-target="#viewBriefing"><span className="fas fa-eye"> </span> Visualizar </button>&nbsp;
					<button className="btn btn-warning" data-toggle="modal" data-target={`#edit-${briefing._id}`}><span className="fas fa-pencil-alt"> </span> Editar </button>&nbsp;
					<button className="btn btn-danger" onClick={this.props.deleteBriefing.bind(this, _id)}><span className="far fa-trash-alt"></span> Remover</button>

					<BriefingModal briefing={briefing} />
					<EditModal briefing={briefingToEdit}/>
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