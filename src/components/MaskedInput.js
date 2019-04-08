import React, { Component } from 'react'

import ReactDOM from 'react-dom';

export default class MaskedInput extends Component {
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({value: e.target.value});
	}

	componentDidMount(){
		var $elem = $(ReactDOM.findDOMNode(this.refs.maskedInput));
		
		$elem.mask(this.props.mask)
		
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.handleChange} ref="maskedInput"></input>
			</div>
		)
	}
}
