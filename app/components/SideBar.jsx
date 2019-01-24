var React = require('react');
var Menu = require('Menu');
var UserCard = require('UserCard');

var style = {
	default: {
		width: '220px',
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
	{id: '1', text: 'Dashboard', fontIcon: 'fa fa-home', link: '/'},
	{id: '2', text: 'Compras', fontIcon: 'fa fa-shopping-cart', link: '/Purchase'},
	{id: '3', text: 'Vendas', fontIcon: 'fa fa-money', link: '/Sale'},
	{id: '4', text: 'Veículos', fontIcon: 'fa fa-car', link: '/CarView'},
	{id: '5', text: 'Produtos', fontIcon: 'fa fa-shopping-bag', link: '/Product'},
	{id: '6', text: 'Serviços', fontIcon: 'fa fa-handshake-o', link: '/Service'},
	{id: '7', text: 'Usuário', fontIcon: 'fa fa-user', link: '/UserView'},
	{id: '11', text: 'Portal', fontIcon: 'fa fa-file-code-o', link: '/Portal'},
	{id: '10', text: 'Site externo', fontIcon: 'fa fa-external-link-square', link: '/ExternalSite'},
	{id: '8', text: 'Conta bancária', fontIcon: 'fa fa-university', link: '/BankAccount'},
	{id: '2', text: 'Cliente', fontIcon: 'fa fa-user-circle-o', link: '/Customer'}
];

var Main = React.createClass({
	
	getInitialState: function () {
		return {
			activeMenuId: null,
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
	},

	render: function () {
		var {activeMenuId} = this.state;

		return (
			<div style={style.default}>
				<div style={style.header}>
					<div>
						{"Juquinha veículos"}
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
					userName={this.props.userName}
				/>
				<Menu
					activeId={activeMenuId == null ? this.props.selectedItem : activeMenuId} 
					items={items} 
					onClick={this.onMenuClick}
				/>
			</div>
		);
	}
});

module.exports = Main;
