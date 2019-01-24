var React = require('react');
var SaleController = require('SaleController');
var GenericView = require('GenericView');
var CarController = require('CarController');
import { FormControl, ControlLabel } from 'react-bootstrap';

var SaleView = React.createClass({

	getInitialState() {
		return {
			cars: [],
			selectedId: -1
		};
	},

	componentWillUpdate: function(nextProps, nextState) {
		var cars = CarController.getAllAvailable(this.updateCarsList, nextState.selectedId);
	},

	componentWillMount: function() {
		var cars = CarController.getAllAvailable(this.updateCarsList, this.state.selectedId);
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		return nextState.selectedId != this.state.selectedId; 
	},

	updateCarsList: function(cars) {

		this.setState({
			cars: cars
		});
	},
	
	getForm: function(data, me) {
		return (
			<div className={'standard-form'}>
				<div className={'show-inline'}>
				    <div>
			        	<ControlLabel>Data de vencimento</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.DUEDATE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('DUEDATE', comp)}}
			        	/>
			        </div>
		        	<div>
		        		<ControlLabel>Data de pagamento</ControlLabel>
		        		<FormControl
		                    type="text"
		                    value={data.PAYMENTDATE}
		                    placeholder=""
		                    onChange={(comp) => {me.onChange('PAYMENTDATE', comp)}}
		                />
		            </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Valor total</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.TOTALVALUE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('TOTALVALUE', comp)}}
			        	/>
					</div>
					<div>	
			          	<ControlLabel>Código do pagamento</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.PAYMENTCODE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('PAYMENTCODE', comp)}}
			        	/>
			        </div>
			    </div>
			    <div>
				    <div>
				    	<ControlLabel>Veículo</ControlLabel>
						<FormControl
			            	componentClass="select"
			            	value={data.CARID}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('CARID',comp)}}>
							{this.renderOptions()}
	    				</FormControl>
				    </div>
			    </div>
			</div>
		);
	},

	renderOptions: function() {
		var options = [];
		var cars = this.state.cars;

		cars.map((car) => {
			options.push(
				<option value={car.id}>{car.columns[0] + " (" + car.columns[5] + ")" }</option>
			);
		});

		return options;
	},

	onSelectItem: function(id) {
		this.setState({
			selectedId: id
		});
	},

	render: function () {
		
		return (
			<GenericView
				controller={SaleController}
				onSelectItem={this.onSelectItem}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = SaleView;