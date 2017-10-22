var React = require('react');

var style = {
	wrapper: {
		margin: '0 auto',
  		width: '100%',
  		background: '#2395db',
  		color: '#FFF',
  		display: 'flex'
	},
	btn: {
		marginLeft: '15px',
		fontSize: '25px',
		cursor: 'pointer'
	}
};

var TableControls = React.createClass({

	onClick: function(action) {

		this.props.onClick(action);
	},

	render: function () {
		return (
			<div style={style.wrapper}>
				<div
					onClick={() => {this.onClick('new')}} 
					style={style.btn}>
					<i className="fa fa-plus"></i>					
				</div>
				<div 
					onClick={() => {this.onClick('edit')}}
					style={style.btn}>
					<i className="fa fa-pencil-square-o"></i>					
				</div>
				<div 
					onClick={() => {this.onClick('delete')}}
					style={style.btn}>
					<i className="fa fa-trash-o"></i>					
				</div>
			</div>
		);
	}
});

module.exports = TableControls;
