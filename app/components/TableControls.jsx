var React = require('react');

var style = {
	wrapper: {
		margin: '0 auto',
  		width: '100%',
  		background: '#2395db',
  		display: 'flex'
	},
	btn: {
		marginLeft: '15px',
		fontSize: '25px',
	},
	btnEnabled: {
  		color: '#FFF',
		cursor: 'pointer'
	},
	btnDisabled: {
		color: '#a9a9a9',
		cursor: 'not-allowed'
	}
};

var TableControls = React.createClass({

	propTypes: {
		disable: React.PropTypes.array,
		onClick: React.PropTypes.func
	},

	onClick: function(action) {

		this.props.onClick(action);
	},

	render: function () {
		var disable = this.props.disable || {};

		var btnNewStyle = Object.assign(
			{}, 
			style.btn, 
			disable.indexOf('new') > -1 ? style.btnDisabled : style.btnEnabled
		);

		var btnEditStyle = Object.assign(
			{}, 
			style.btn, 
			disable.indexOf('edit') > -1 ? style.btnDisabled : style.btnEnabled
		);

		var btnDeleteStyle = Object.assign(
			{}, 
			style.btn, 
			disable.indexOf('delete') > -1 ? style.btnDisabled : style.btnEnabled
		);

		return (
			<div style={style.wrapper}>
				<div
					onClick={disable['new'] ? null : () => {this.onClick('new')}}
					style={btnNewStyle}>
					<i className="fa fa-plus"></i>					
				</div>
				<div 
					onClick={disable['edit'] ? null : () => {this.onClick('edit')}}
					style={btnEditStyle}>
					<i className="fa fa-pencil-square-o"></i>					
				</div>
				<div 
					onClick={disable['delete'] ? null : () => {this.onClick('delete')}}
					style={btnDeleteStyle}>
					<i className="fa fa-trash-o"></i>					
				</div>
			</div>
		);
	}
});

module.exports = TableControls;
