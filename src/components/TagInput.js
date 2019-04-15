import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import PropTypes from 'prop-types';

const KeyCodes = {
	comma: 188,
	enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class TagInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: []
		}

		this.handleAddition = this.handleAddition.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(i) {
		const { tags } = this.state;

		this.setState({
			tags: tags.filter((tag, index) => index !== i)
		});

		this.props.changeTag.bind(this.state);
	}

	handleAddition(tag) {
		this.state.tags.push(tag)
		this.props.changeTag(this.state.tags);
	}

	handleDrag(tag, currPos, newPos) {
		const tags = [...this.state.tags];
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		this.setState({ tags: newTags });
		this.props.changeTag.bind((this.state));

	}

	componentWillMount(){
		const {tags} = this.props;
		const tagsObj = tags.map(tag=>{
			return {id: tag, text: tag}
		});

		this.setState({tags: tagsObj});
	}

	render() {
		const { tags } = this.state;
		return (
			<ReactTags tags={tags}
				handleDelete={this.handleDelete}
				handleAddition={this.handleAddition}
				handleDrag={this.handleDrag}
				delimiters={delimiters}
				placeholder="Pressione Enter ou , (vírgula) para adicionar uma característica."
				autofocus={false}
				classNames={{
					tagInputField: 'form-control',
					tagInput: 'mb-3'
				}}
			/>
		)
	}
}

TagInput.propTypes = {
	changeTag: PropTypes.func.isRequired
}

export default TagInput;
