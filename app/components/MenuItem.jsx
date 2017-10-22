var React = require('react');

var style = {
	default: {
		padding: '5px 10px 5px 10px',
		cursor: 'pointer'
	},
	active: {
		backgroundColor: '#2089c9',
		fontWeight: 'bold'
	},
	fontIcon: {
		marginRight: '15px'
	}
}

var MenuItem = React.createClass({

	propTypes: {
		onClick: React.PropTypes.func,
		id: React.PropTypes.string,
		text: React.PropTypes.string,
		fontIcon: React.PropTypes.string,
		active: React.PropTypes.bool,
		expanded: React.PropTypes.bool
	},

	renderFontIcon: function() {
		var {fontIcon} = this.props;

		return (
			<i 
				style={style.fontIcon}
				className={fontIcon}>
			</i>
		)
	},

	render: function() {
		var {id, text, fontIcon, active, onClick} = this.props;

		var cmpStyle = Object.assign(
			{},
			style.default,
			active ? style.active : null
		);

		return (
			<div
				id={id}
				style={cmpStyle}
				onClick={() => {onClick(id)}}>
				{fontIcon ? this.renderFontIcon() : null}
				{text}
			</div>
		);
	}
});

module.exports = MenuItem;