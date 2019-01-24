var React = require('react');
var PurchaseController = require('PurchaseController');
var CarController = require('CarController');
var GenericView = require('GenericView');
import { FormControl, ControlLabel, Nav, NavItem } from 'react-bootstrap';

var PurchaseView = React.createClass({
	
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
						<ControlLabel>Fornecedor</ControlLabel>
						<FormControl
				            type="text"
				            value={data.PROVIDERNAME}
				            placeholder=""
				            onChange={(comp) => {me.onChange('PROVIDERNAME', comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Telefone</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.PROVIDERPHONE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('PROVIDERPHONE', comp)}}
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
			          	<ControlLabel>Data do pagamento</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.PAYMENTDATE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('PAYMENTDATE', comp)}}
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
				controller={PurchaseController}
				onSelectItem={this.onSelectItem}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = PurchaseView;

