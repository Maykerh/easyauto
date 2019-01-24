var React = require('react');
import { Modal, Button } from 'react-bootstrap';

var StandardModal = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		body: React.PropTypes.object,
		onSave: React.PropTypes.func
	},

	onSave: function() {
		this.props.onSave();
	},

	onCancel: function() {
	this.props.onCancel();
	},
	
	render: function () {

		return (
			<Modal
				{...this.props}
				show={this.props.show}
				onHide={this.onCancel}
				dialogClassName="custom-modal">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.body}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.onCancel}>
						{'Cancelar'}
					</Button>
					<Button onClick={this.onSave}>
						{'Salvar'}
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
});

module.exports = StandardModal;