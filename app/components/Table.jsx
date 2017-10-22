var React = require('react');
var TableLine = require('TableLine');
var TableControls = require('TableControls');

var style = {
	wrapper: {
		margin: '0 auto',
  		width: '100%',
  		backgroundColor: '#FFF'
	},
	table: {
		margin: '10px',
		width: 'calc(100% - 20px)',
		boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
		border: '1px solid #9e9e9e',
		borderRadius: '5px',
		display: 'table'
	},
	header: {
	    fontWeight: '900',
	    color: '#ffffff',
	    background: '#2395db',
	    display: 'table-row'
	},
	cell: {
	  padding: '6px 12px',
	  display: 'table-cell'
	}
};

var lines = [
	{number: '1', id: '1', columns: ['Dashboard', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '2', id: '2', columns: ['Compras', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '3', id: '3', columns: ['Vendas', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '4', id: '4', columns: ['Veículos', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '5', id: '5', columns: ['Produtos', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '4', id: '4', columns: ['Veículos', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '5', id: '5', columns: ['Produtos', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '4', id: '4', columns: ['Veículos', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '5', id: '5', columns: ['Produtos', 'aaaa', 'bbbbb', 'ccccc']},
	{number: '6', id: '6', columns: ['Serviços', 'aaaa', 'bbbbb', 'ccccc']}
];

var Table = React.createClass({

	getInitialState: function () {
		return {
			selectedIds: []
		};
	},

	renderHeader: function() {

		return (
			<div style={style.header}>
				<div style={style.cell}>
	        		
	      		</div>
				<div style={style.cell}>
	        		{"Name"}
	      		</div>
	      		<div style={style.cell}>
	        		{"Age"}
	      		</div>
	      		<div style={style.cell}>
	        		{"Occupation"}
	      		</div>
	      		<div style={style.cell}>
	        		{"Location"}
	      		</div>
	    	</div>
		);
	},

	onControlClick: function(action) {
		var selectedIds = this.state.selectedIds;

		switch (action) {
			case 'new':
				this.props.onNew();
				break;
			case 'edit':
				this.props.onEdit(selectedIds);
				break;
			case 'delete':
				this.props.onDelete(selectedIds);
				break;
		}
	},

	onLineCLick: function(id, checked) {
		var {selectedIds} = this.state;

		if (checked)
			selectedIds.push(id);
		else {
			let index = selectedIds.indexOf(id);

			selectedIds.splice(index, 1);
		}

		this.setState({
			selectedIds: selectedIds
		});
	},

	renderLines: function() {
		var linesList = [];

		lines.map((lineData) => {
			linesList.push(this.renderLine(lineData));
		});

		return linesList; 
	},

	renderLine: function(lineData) {

		return (
			<TableLine
				onClick={this.onLineCLick} 
				data={lineData}
			/>
		);
	},

	render: function () {

		return (
			<div style={style.wrapper}>
				<TableControls onClick={this.onControlClick}/>
			  	<div style={style.table}>
			    	{this.renderHeader()}
			    	{this.renderLines()}
				</div>
			</div>
		);
	}
});

module.exports = Table;