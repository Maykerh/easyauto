var React = require('react');
var ReactDOM = require('react-dom');

var style = {
	row: {
		display: 'table-row',
		background: '#f6f6f6'
	},
	row2: {
		display: 'table-row',
		background: '#e6e6e6'
	},
	cell: {
	  	padding: '6px 12px',
	  	display: 'table-cell'
	},
	checkCell: {
	  	padding: '0px 12px',
	  	display: 'table-cell',
	  	width: '37px'
	},
	hover: {
		color: '#2395db'
	}
};

var TableLine = React.createClass({

	propTypes: {
		onClick: React.PropTypes.func,
		data: React.PropTypes.object
	},

	getInitialState: function () {
		return {
			hover: false
		};
	},

	onClick: function(id) {

		this.props.onClick(id, this.lineCheckbox.checked);
	},

	onMouseOver: function() {
		this.setState({	
			hover: true
		});
	},

	onMouseOut: function() {

		this.setState({	
			hover: false
		});
	},

	addSelecionCell: function() {
		var {data} = this.props;

		return (
			<div style={style.checkCell}>
				<input
					type="checkbox"
					ref={(thisCheck) => { this.lineCheckbox = thisCheck; }}
					onClick={() => {this.onClick(data.id)}}
				/>
			</div>
		);
	},

	renderCells: function() {
		var cellsList = [];
		var {data} = this.props;

		cellsList.push(this.addSelecionCell());

		data.columns.map((cellText) => {
			cellsList.push(this.renderCell(cellText));
		});

		return cellsList;
	},

	renderCell: function(cellText) {

		return (
			<div key={cellText} style={style.cell}>
			    {cellText}
		    </div>
		);
	},

	render: function() {
		var {data} = this.props;

		var rowStyle = Object.assign(
			{},
			data.number % 2 > 0 ? style.row : style.row2,
			this.state.hover ? style.hover : null
		);

		return (
			<div 
				key={data.number}
				onMouseOver={this.onMouseOver}
				onMouseOut={this.onMouseOut}
				style={rowStyle}>
				{this.renderCells()}
			</div>
		);
	}
});

module.exports = TableLine;