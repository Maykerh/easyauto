var React = require('react');
var MenuItem = require('MenuItem');

var style = {
	default: {
		color: '#FFF',
		height: '100%',
		width: '100%',
		backgroundColor: '#2395db'
	}
}

var Menu = React.createClass({

	propTypes: {
		items: React.PropTypes.array
	},

	renderMenuItems: function() {
		var itemsList = [];
		var {items} = this.props;

		items.map((item) => {
			itemsList.push(this.renderMenuItem(item));
		});

		return itemsList; 
	},

	renderMenuItem: function(item) {
		var {onClick, activeId} = this.props;
		
		return (
			<MenuItem 
				onClick={onClick} 
				id={item.id}
				text={item.text}
				fontIcon={item.fontIcon}
				active={activeId == item.id}
			/>
		);
	},

	render: function() {

		return (
			<div style={style.default}>
				{this.renderMenuItems()}
			</div>
		);
	}
});

module.exports = Menu;