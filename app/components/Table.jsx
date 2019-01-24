/********************************************************************************************
 *	Valores da tabela devem ser passados no formato:										* 
 *																							*
 *	var headers = [																			*
 *		"Column1",																			*
 *		"Column2",																			*
 *		"Column3"																			*
 * 	];																						*
 *																							*
 *	var lines = [																			*
 *		{index: '1', id: '1', columns: ['column1-data', 'column2-data', 'column3-data']},	*
 *		{index: '2', id: '2', columns: ['column1-data', 'column2-data', 'column3-data']},	*
 *	];																						*
 *																							*
 ********************************************************************************************/

var React = require('react');
var TableLine = require('TableLine');
var TableControls = require('TableControls');
var TablePagination = require('TablePagination');

var style = {
	wrapper: {
		margin: '0 auto',
  		width: '100%',
  		backgroundColor: '#FFF'
	},
	table: {
		margin: '7px',
		width: 'calc(100% - 14px)',
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

var Table = React.createClass({

	propTypes: {
		headers: React.PropTypes.array,
		data: React.PropTypes.array,
		onNew: React.PropTypes.func,
		onDelete: React.PropTypes.func,
		onEdit: React.PropTypes.func
	},

	onControlClick: function(action) {
		var selectedIds = this.props.selectedIds;

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
		var {selectedIds} = this.props;
		
		if (checked)
			selectedIds.push(id);
		else {
			let index = selectedIds.indexOf(id);

			selectedIds.splice(index, 1);
		}

		this.props.onSelect(selectedIds);
	},

	renderHeaders: function() {
		var {headers} = this.props;
		var headersList = [];

		headers.map((header) => {
			headersList.push(this.renderHeader(header));
		});

		return (
			<div style={style.header}>
				<div style={style.cell}>
	        		
	      		</div>
				{headersList}
	    	</div>
		);
	},

	renderHeader: function(header) {

		return (
			<div style={style.cell}>
        		{header}
      		</div>
		);
	},

	renderLines: function() {
		var {data} = this.props;
		var linesList = [];

		data.map((lineData) => {
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
		var {selectedIds} = this.props;
		var controlsToDisable = [];

		if (!selectedIds || selectedIds.length < 1)
			controlsToDisable.push('edit', 'delete');

		if (selectedIds && selectedIds.length > 1)
			controlsToDisable.push('edit');

		return (
			<div style={style.wrapper}>
				<TableControls
					disable={controlsToDisable}
					onClick={this.onControlClick}
				/>
			  	<div style={style.table}>
			    	{this.renderHeaders()}
			    	{this.renderLines()}
				</div>
				<TablePagination/>
			</div>
		);
	}
});

module.exports = Table;