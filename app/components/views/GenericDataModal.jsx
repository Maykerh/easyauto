var React = require('react');
var StandardModal = require('StandardModal');

import { FormControl, ControlLabel } from 'react-bootstrap';

var GenericDataModal = React.createClass({

	getInitialState: function() {
		return {
			data: this.props.controller.getInitialData()
		};
	},

	componentWillReceiveProps: function(newProps) {
		var id = newProps.id;

		if(id)
			this.getData(id);
	},

	getData: function(id) {
		this.props.controller.getOne(this.updateData, id);
	},

	updateData: function(data) {
		this.setState({
			data: data
		});
	},

	hideModal: function() {
		this.props.onHide();
	},

	saveData: function() {
		if (this.props.id)
			this.props.controller.update(this.props.onSave, this.state.data, this.props.id);
		else
			this.props.controller.insert(this.props.onSave, this.state.data);
	},

	onCancel: function() {

		this.props.onCancel();
	},

	onChange: function(id, value) {
		var data = this.state.data;

		data[id] = value.target.value;

		this.setState({
			data: data
		});
	},

	getForm: function() {
		var data = this.state.data;
		var me = this;

		return this.props.getForm(data, me);
	},
	
	render: function () {

		return (
			<StandardModal
				title={this.props.title}
				onSave={this.saveData}
				onCancel={this.onCancel}
				body={this.getForm()}
				show={this.props.show}
			/>
		);
	}
});

module.exports = GenericDataModal;