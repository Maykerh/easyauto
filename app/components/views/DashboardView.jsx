var React = require('react');
var DashboardController = require('DashboardController');
import { FormControl, ControlLabel, Button } from 'react-bootstrap';
import {Line} from 'react-chartjs-2';

var legendOpts = {
	display: true,
	position: 'bottom',
	fullWidth: true,
	reverse: false,
};


var style = {
	verticalContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	horizontalContainer: {
		display: 'flex',
		flexDirection: 'row'
	},
	valueBox: {
		width: '100%',
	    boxShadow: '3px 3px 5px 0px #e6e6e6',
	    margin: '10px 10px',
	    border: '1px solid #ecebeb',
	    textAlign: 'center',
	    padding: '5px',
	    height: '180px'
	},
	chartBox: {
		width: 'calc(100% - 20px)',
	    boxShadow: '3px 3px 5px 0px #e6e6e6',
	    margin: '10px 10px',
	    border: '1px solid #ecebeb',
	    padding: '5px',
	    height: 'auto'
	},
	boxTitle: {
		fontWeight: 'bold',
		marginBottom: '10px'
	},
	boxContent: {
		fontSize: '30px',
		textAlign: 'center',
		fontWeight: '900',
		alignSelf: 'center',
		display: 'flex',
		height: 'calc(100% - 50px)',
		flexDirection: 'column',
		justifyContent: 'space-evenly'
	}
}

var DashboardView = React.createClass({

	getInitialState: function() {
		return {
			totalCars: 0,
			totalPurchase: 0,
			totalSale: 0,
			salesChart: null,
			purchaseChart: null
		};
	},

	componentWillMount: function() {
		this.getDashDataChart();
	},

	getDashDataChart: function() {
		var date = {
			dtini: '2017-01-10',
			dtend: '2017-31-10'
		};

		DashboardController.getSalesChart(date, this.setSalesChart);
		DashboardController.getPurchaseChart(date, this.setPurchaseChart);
		DashboardController.getTotalCarsInStock(date, this.setTotalCars);
		DashboardController.getTotalPurchaseValue(date, this.setTotalPurchaseValue);
		DashboardController.getTotalSaleValue(date, this.setTotalSaleValue);
	},

	setTotalCars: function(data) {
		this.setState({
			totalCars: data
		});
	},

	setTotalPurchaseValue: function(data) {
		this.setState({
			totalPurchase: data
		});
	},

	setTotalSaleValue: function(data) {
		this.setState({
			totalSale: data
		});
	},

	setSalesChart: function(chart) {
		this.setState({
			salesChart: chart
		});
	},

	setPurchaseChart: function(chart) {
		this.setState({
			purchaseChart: chart
		});
	},

	render: function () {
		return (
			<div>
				<div style={style.horizontalContainer}>
					<div style={style.valueBox}>
						<div style={style.boxTitle}>
							{'Faturamento no período'}
						</div>
						<div style={style.boxContent}>
							{this.state.totalSale ? 'R$' + this.state.totalSale.toLocaleString('pt-BR') : 'Não há dados'}
						</div>
					</div>
					<div style={style.valueBox}>
						<div style={style.boxTitle}>
							{'Gastos no período'}
						</div>
						<div style={style.boxContent}>
							{this.state.totalPurchase ? 'R$' + this.state.totalPurchase.toLocaleString('pt-BR') : 'Não há dados'}
						</div>
					</div>
					<div style={style.valueBox}>
						<div style={style.boxTitle}>
							{'Veículos em estoque'}
						</div>
						<div style={style.boxContent}>
							{this.state.totalCars}
						</div>
					</div>
				</div>
				<div style={style.verticalContainer}>
					<div style={style.chartBox}>
						<div style={style.boxTitle}>
							{'Compras no período'}
						</div>
						<div>
							<Line 
								data={this.state.salesChart} 
								height={300} 
								options={{maintainAspectRatio: false}}
								legend={legendOpts}
							/>
						</div>
					</div>
					<div style={style.chartBox}>
						<div style={style.boxTitle}>
							{'Vendas no período'}
						</div>
						<div>
						<div>
							<Line 
								data={this.state.purchaseChart} 
								height={300} 
								options={{maintainAspectRatio: false}}
								legend={legendOpts}
							/>
						</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = DashboardView;