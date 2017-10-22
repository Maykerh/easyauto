var React = require('react');
var SideBar = require('SideBar');
var TopBar = require('TopBar');
var Table = require('Table');

var style = {
	default: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#e6e6e6'
	},
	sidebarDiv: {
		height: '100%'
	},
	contentContainer: {
		width: '100%',
		height: '100%'
	},
	contentArea: {
		border: '1px solid #9e9e9e',
		borderRadius: '5px',
		width: 'calc(100% - 20px)',
		height: '100%',
		margin: '10px',
		backgroundColor: '#FFF'
	},
	topBar: {
		width: '100%',
		height: '50px',
		border: '1px solid blue'
	}
}

var Main = React.createClass({
	
	getInitialState: function () {
		return {
			activeMenuId: 1
		};
	},

	onMenuClick: function(id) {

		this.setState({
			activeMenuId: id
		});
	},

	render: function () {
		var {activeMenuId} = this.state;

		return (
			<div style={style.default}>
				<div style={style.sidebarDiv}>
					<SideBar/>
				</div>
				<div style={style.contentContainer}>
					<div style={style.topBar}>
						
					</div>
					<div style={style.contentArea}>
						<Table/>
					</div>
				</div>

			</div>
		);
	}
});

module.exports = Main;