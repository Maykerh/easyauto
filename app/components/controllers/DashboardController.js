var Axios = require('axios');

module.exports = {

	getSalesChart: function(date, callback) {

		Axios({
		  	method: 'post',
		 	url: 'http://localhost:8081/sale/getByDate',
		 	data: date,
		}).then((response) => {
			var chartData = this.generateChart(response.data, 'Número de vendas');

			callback(chartData);
		});
	},

	getPurchaseChart: function(date, callback) {

		Axios({
		  	method: 'post',
		 	url: 'http://localhost:8081/purchase/getByDate',
		 	data: date,
		}).then((response) => {
			var chartData = this.generateChart(response.data, 'Número de compras');

			callback(chartData);
		});
	},

	getTotalCarsInStock: function(date, callback) {

		Axios({
		  	method: 'post',
		 	url: 'http://localhost:8081/car/getTotalCarsInStock',
		 	data: date,
		}).then((response) => {

			callback(response.data[0].TOTAL);
		});
	},

	getTotalPurchaseValue: function(date, callback) {

		Axios({
		  	method: 'post',
		 	url: 'http://localhost:8081/purchase/getTotalValue',
		 	data: date,
		}).then((response) => {
			
			callback(response.data[0].TOTAL);
		});
	},

	getTotalSaleValue: function(date, callback) {

		Axios({
		  	method: 'post',
		 	url: 'http://localhost:8081/sale/getTotalValue',
		 	data: date,
		}).then((response) => {

			callback(response.data[0].TOTAL);
		});
	},


	generateChart: function(data, chartTitle) {
		var labels = [];
		var values = [];

		data.map((reg) => {
			labels.push(reg.DATE);
			values.push(reg.TOTAL);
		});

		var chartData = {
		  	labels: labels,
		 	datasets: [{
			    label: chartTitle,
			    fill: true,
			    lineTension: 0.1,
			    backgroundColor: 'rgba(75,192,192,0.4)',
			    borderColor: 'rgba(75,192,192,1)',
			    borderCapStyle: 'butt',
			    borderDash: [],
			    borderDashOffset: 0.0,
			    borderJoinStyle: 'miter',
			    pointBorderColor: 'rgba(75,192,192,1)',
			    pointBackgroundColor: '#fff',
			    pointBorderWidth: 1,
			    pointHoverRadius: 5,
			    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			    pointHoverBorderColor: 'rgba(220,220,220,1)',
			    pointHoverBorderWidth: 2,
			    pointRadius: 1,
			    pointHitRadius: 10,
			    data: values
			}]
		};

		return chartData;
	}
};

