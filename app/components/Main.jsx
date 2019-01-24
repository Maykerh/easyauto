var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var SideBar = require('SideBar');
var LoginView = require('LoginView');
var LoginController = require('LoginController');

var style = {
	default: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#e6e6e6'
	},
	sidebarDiv: {
		backgroundColor: '#2395db',
	},
	contentContainer: {
		width: '100%',
		height: '100%'
	},
	contentArea: {
		border: '1px solid #9e9e9e',
		borderRadius: '5px',
		width: 'calc(100% - 20px)',
		height: 'calc(100% - 65px)',
		margin: '10px',
		backgroundColor: '#FFF',
		overflow: 'scroll',
		overflowX: 'hidden'
	},
	topBar: {
		height: '46px',
		backgroundColor: '#2395db',
		color: '#FFF',
		display: 'flex',
		justifyContent: 'flex-end'
	},
	topBarText: {
		alignSelf: 'center',
		fontWeight: 'bold',
    	marginRight: '10px',
    	cursor: 'pointer'
	}
};

var startLocation = location.href;

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

	getActivePage: function() {

		var loc = location.href;
		var activeTab = 1;

		if (loc.indexOf('CarView') > -1)
			activeTab = 4;

		// Fazer para os outros menus tbm

		return activeTab;
	},

	onLogin: function(data) {
		this.setState({
			isLogged: true,
			userName: data.NAME + " " + data.LASTNAME
		});
	},

	onLogout: function() {
		this.setState({
			isLogged: false
		});
	},

	renderLoginPage: function() {

		return (
			<LoginView onLogin={this.onLogin}/>
		);
	},

	renderComponents: function() {

		return (
			<div style={style.default}>
				<div style={style.sidebarDiv}>
					<SideBar 
						selectedItem={this.getActivePage()} 
						userName={this.state.userName}
					/>
				</div>
				<div style={style.contentContainer}>
					<div style={style.topBar}>
						<div 
							onClick={this.onLogout}
							style={style.topBarText}>
							{'Logout '}<i className={'fa fa-sign-out'}/>
						</div>
					</div>
					<div style={style.contentArea}>
						{this.props.children}
					</div>
				</div>				
			</div>
		);
	},

	render: function () {
		var {activeMenuId, isLogged} = this.state;

		// isLogged = true;
		
		if (!isLogged)
			return this.renderLoginPage();
		else 
			return this.renderComponents();
	}
});

module.exports = Main;