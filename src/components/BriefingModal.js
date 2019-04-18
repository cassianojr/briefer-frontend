import React from 'react';

function BriefingModal(props) {
	const { briefing } = props;
	const time_goal = new Date(briefing.budget.time_goal).toLocaleDateString();

	return (
		<div className="modal fade" id="viewBriefing" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

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
						<p><b>Mídias sociais: </b>{briefing.social_media || "Nâo possui" }</p>
						<p><b>Por que criar o projeto: </b>{briefing.outline}</p>
						<p><b>Descrição: </b>{briefing.description}</p>
						<p><b>Prazo: </b>{time_goal}</p>
						<p><b>Custo: </b>{briefing.budget.cost}</p>
						<p><b>Possui Logo: </b>{(briefing.has_logo) ? "Sim": "Não"}</p>
						<p><b>Possui Identidade Visual: </b>{(briefing.has_visual) ? "Sim": "Não"}</p>
						<p><b>Possui um site que precise de redesing: </b>{(briefing.has_current) ? "Sim": "Não"}</p>
						<p><b>Características principais:</b></p>
						{briefing.features.map(feature=>
							<p key={feature} style={{marginRight: '5px'}} className="badge badge-primary"> {feature} </p>
							)}
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BriefingModal
