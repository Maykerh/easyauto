var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx',
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			applicationStyles: 'app/styles/app.scss',
			Main: 'app/components/Main.jsx',
			Menu: 'app/components/Menu.jsx',
			MenuItem: 'app/components/MenuItem.jsx',
			StandardModal: 'app/components/StandardModal.jsx',
			UserCard: 'app/components/UserCard.jsx',
			SideBar: 'app/components/SideBar.jsx',
			TopBar: 'app/components/TopBar.jsx',
			Table: 'app/components/Table.jsx',
			TableLine: 'app/components/TableLine.jsx',
			TableControls: 'app/components/TableControls.jsx',
			TablePagination: 'app/components/TablePagination.jsx',
			GenericView: 'app/components/views/GenericView.jsx',
			GenericDataModal: 'app/components/views/GenericDataModal.jsx',
			UserView: 'app/components/views/UserView.jsx',
			UserController: 'app/components/controllers/UserController.js',
			CarView: 'app/components/views/CarView.jsx',
			CarController: 'app/components/controllers/CarController.jsx',
			BankAccountView: 'app/components/views/BankAccountView.jsx',
			BankAccountController: 'app/components/controllers/BankAccountController.js',
			CustomerView: 'app/components/views/CustomerView.jsx',
			CustomerController: 'app/components/controllers/CustomerCOntroller.js',
			ExternalSiteView: 'app/components/views/ExternalSiteView.jsx',
			ExternalSiteController: 'app/components/controllers/ExternalSiteCOntroller.js',
			ItemView: 'app/components/views/ItemView.jsx',
			ItemController: 'app/components/controllers/ItemCOntroller.js',
			PortalView: 'app/components/views/PortalView.jsx',
			PortalController: 'app/components/controllers/PortalCOntroller.js',
			ProductView: 'app/components/views/ProductView.jsx',
			ProductController: 'app/components/controllers/ProductCOntroller.js',
			PurchaseView: 'app/components/views/PurchaseView.jsx',
			PurchaseController: 'app/components/controllers/PurchaseCOntroller.js',
			SaleView: 'app/components/views/SaleView.jsx',
			SaleController: 'app/components/controllers/SaleCOntroller.js',
			ServiceView: 'app/components/views/ServiceView.jsx',
			ServiceController: 'app/components/controllers/ServiceController.js',
			LoginController: 'app/components/controllers/LoginController.js',
			LoginView: 'app/components/views/LoginView.jsx',
			DashboardView: 'app/components/views/DashboardView.jsx',
			DashboardController: 'app/components/controllers/DashboardController.js'

		},
		extensions: [ '', '.js', '.jsx' ]
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			query: {
				presets: [ 'react', 'es2015', 'stage-0' ]
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
}