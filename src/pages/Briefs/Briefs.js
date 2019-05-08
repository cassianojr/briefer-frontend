import React, { Component } from 'react'
import { connect } from 'react-redux';

import { briefingActions } from '../../actions';
import { Link } from 'react-router-dom';

import BriefingItem from '../../components/BriefingItem';

import { Notify } from 'react-redux-notify';

class Briefs extends Component {

	constructor(props) {
		super(props);

		const user = JSON.parse(localStorage.getItem("user"));
		this.state = {
			userName: user.name
		}

		this.search = this.search.bind(this);
	}
	search(e) {

		this.props.dispatch(briefingActions.search(e.target.value));
	}

	deleteBriefing = (id_briefing) => {
		this.props.dispatch(briefingActions.deleteBriefing(id_briefing));
	}

	componentDidMount() {
		this.props.dispatch(briefingActions.getAll());
	}

	render() {

		const { briefings } = this.props;
		if (briefings.success_upd) {
			const body = document.body,
				modalBackdrop = document.querySelector('.modal-backdrop');
			body.classList.remove('modal-open');
			modalBackdrop.parentNode.removeChild(modalBackdrop);
		}

		const briefingItems = !(briefings.filteredBriefings) ? briefings.items : briefings.filteredBriefings;


		return (
			<div className="container" style={{marginTop: '50px'}}>
				<div className="col-lg-11 float-right">
					<Notify position={'BottomRight'} />
					<div className="col-lg-12">
						<div className="row form-group has-search">
							<div className="col-lg-9 col-sm-9 col-10 form-search">
								<span className="fa fa-search form-control-feedback"></span>
								<input type="text" className="form-control " placeholder="Pesquisar por briefing" name="search" onChange={this.search} />
							</div>
							<Link className="btn btn-primary col-lg-3 col-2 col-sm-3" to="/new_briefing"><span className="fas fa-plus-circle"></span> <span className="d-none d-sm-inline">Novo Briefing</span></Link>
						</div>
					</div>
					<div>
						{briefings.loading && <em>Loading briefings...</em>}
						{briefings.error && <span className="txt-danger">Error: {briefings.error}</span>}
						{briefings.items &&
							<div>
								{briefingItems.map(briefing =>
									<BriefingItem key={briefing._id} deleteBriefing={this.deleteBriefing} briefing={briefing} />
								)}
							</div>
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { briefings } = state;
	return { briefings };
}

export default connect(mapStateToProps)(Briefs);