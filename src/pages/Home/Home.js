import React, { Component } from 'react'
import { connect } from 'react-redux';

import { briefingActions } from '../../actions';

import BriefingItem from '../../components/BriefingItem';

class Home extends Component {

	constructor(props){
		super(props);

		const user = JSON.parse(localStorage.getItem("user"));
		this.state = {
			userName: user.name
		}
	}

	deleteBriefing = (id_briefing)=>{
		this.props.dispatch(briefingActions.deleteBriefing(id_briefing));
	}

	componentDidMount() {
		this.props.dispatch(briefingActions.getAll());
	}

	render() {
		const { briefings } = this.props;
		console.log(this.props);
		return (
			<div className="container">
				{this.props.sidebar}
				<div className="col-lg-11 float-right">
					<h1 style={{textAlign: 'center'}}>Bem vindo {this.state.userName}</h1>
					<a className="btn btn-primary col-lg-12" href="/new_briefing"><span className="fas fa-plus-circle"></span> Novo Briefing</a>
					<div>
						{briefings.loading && <em>Loading briefings...</em>}
						{briefings.error && <span className="txt-danger">Error: {briefings.error}</span>}
						{briefings.items &&
							<div>
								{briefings.items.map(briefing =>
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

export default connect(mapStateToProps)(Home);
