import React from 'react';
import { Briefing } from '../pages/Briefing';

export default function EditModal(props) {
	const { briefing } = props;
	briefing.time_goal = briefing.budget.time_goal;
	briefing.cost = briefing.budget.cost;

	return (
		<div className="modal fade" id="editBriefing" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Editando Briefing {briefing.proj_title}</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<Briefing briefing={briefing} />
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
					</div>
				</div>
			</div>
		</div>
	)
}
