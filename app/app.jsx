var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var BankAccountView = require('BankAccountView');
var CarView = require('CarView');
var CustomerView = require('CustomerView');
var ExternalSiteView = require('ExternalSiteView');
var PortalView = require('PortalView');
var ProductView = require('ProductView');
var PurchaseView = require('PurchaseView');
var SaleView = require('SaleView');
var ServiceView = require('ServiceView');
var UserView = require('UserView');
var LoginView = require('LoginView');
var DashboardView = require('DashboardView');

//$(document).foundation();

require('style!css!sass!applicationStyles');

var inicial = React.createClass({
	render: function () {
		return (
			<div>
				{'pagina inicial'}
			</div>
		);
	}
});

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={DashboardView}/>
			<Route path="Login" component={LoginView}/>
			<Route path="BankAccount" component={BankAccountView}/>
			<Route path="CarView" component={CarView}/>
			<Route path="Customer" component={CustomerView}/>
			<Route path="ExternalSite" component={ExternalSiteView}/>
			<Route path="Portal" component={PortalView}/>
			<Route path="Product" component={ProductView}/>
			<Route path="Purchase" component={PurchaseView}/>
			<Route path="Sale" component={SaleView}/>
			<Route path="Service" component={ServiceView}/>
			<Route path="UserView" component={UserView}/>
		</Route>
	</Router>,
	document.getElementById('app')
);

			
/*
			
			<Route path="Item" component={ItemView}/>
			
			<Route path="UserView" component={UserViewView}/>*/