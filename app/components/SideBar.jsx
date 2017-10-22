var React = require('react');
var Menu = require('Menu');
var UserCard = require('UserCard');

var style = {
	default: {
		width: '220px',
		height: '100%'
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '10px',
		backgroundColor: '#2395db',
		border: '2px solid #2089c9',
		color: '#FFF'
	},
	headerArrow: {
		paddingTop: '5px'
	}
}

var items = [
	{id: '1', text: 'Dashboard', fontIcon: 'fa fa-home'},
	{id: '2', text: 'Compras', fontIcon: 'fa fa-shopping-cart'},
	{id: '3', text: 'Vendas', fontIcon: 'fa fa-money'},
	{id: '4', text: 'Veículos', fontIcon: 'fa fa-car'},
	{id: '5', text: 'Produtos', fontIcon: 'fa fa-shopping-bag'},
	{id: '6', text: 'Serviços', fontIcon: 'fa fa-handshake-o'},
];

var Main = React.createClass({
	
	getInitialState: function () {
		return {
			activeMenuId: 1,
			expanded: this.props.expanded
		};
	},

	onMenuClick: function(id) {

		this.setState({
			activeMenuId: id
		});
	},

	expandPanel: function() {
		var {expanded} = this.state;

		alert('expa')
	},

	render: function () {
		var {activeMenuId} = this.state;

		return (
			<div style={style.default}>
				<div style={style.header}>
					<div>
						{"Company name"}
					</div>
					<div onClick={this.expandPanel}>
						<i 	
							style={style.headerArrow}
							className={"fa fa-chevron-left"}>
						</i>
					</div>
				</div>
				<UserCard 
					imgSrc={'https://image.flaticon.com/icons/svg/145/145848.svg'} 
					userName={'Juquinha da Silva'}
				/>
				<Menu
					activeId={activeMenuId} 
					items={items} 
					onClick={this.onMenuClick}
				/>
			</div>
		);
	}
});

module.exports = Main;