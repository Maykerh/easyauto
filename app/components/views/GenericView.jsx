var React = require('react');
var Table = require('Table');
var DataModal = require('GenericDataModal');

var GenericView = React.createClass({
	
	getInitialState: function () {
		return {
			tableData: [],
			showModal: false,
			selectedIds: []
		};
	},

	componentWillMount: function() {
		this.getData();
	},

	getData: function() {
		this.props.controller.getAll(this.updateTableData);
	},

	updateTableData: function(data) {
		this.setState({
			tableData: data
		});
	},

	onMenuClick: function(id) {

		this.setState({
			activeMenuId: id
		});
	},

	onNew: function() {
		this.openData(null);
	},

	onEdit: function(ids) {
		this.setState({
			showModal: true,
			idToEdit: ids[0]
		});
	},

	onDelete: function(ids) {

		this.props.controller.deleteReg(this.unselectAll, ids);
	},

	unselectAll: function() {
		this.setState({
			selectedIds: []
		})

		this.getData();
	},

	afterSaveData: function() {

		this.closeData();
		this.getData();
	},

	openData: function(id) {
		this.setState({
			showModal: true
		});
	},

	closeData: function() {

		this.setState({
			showModal: false,
			idToEdit: null
		});
	},

	onSelect: function(ids) {

		this.props.onSelectItem(ids[0]);
		
		this.setState({
			selectedIds: ids
		})
	},

	render: function () {
		var {activeMenuId, tableData, showModal, idToEdit, selectedIds} = this.state;

		return (
			<div id="teste">
				<DataModal 
					show={showModal} 
					onCancel={this.closeData} 
					onSave={this.afterSaveData}
					controller={this.props.controller}
					getForm={this.props.getForm}
					title={this.props.title}
					id={idToEdit}
				/>
				<Table
					headers={this.props.controller.getHeaders()}
					data={tableData}
					onNew={this.onNew}
					onDelete={this.onDelete}
					onEdit={this.onEdit}
					onSelect={this.onSelect}
					selectedIds={selectedIds}
				/>
			</div>
		);
	}
});

module.exports = GenericView;