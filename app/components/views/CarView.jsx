var React = require('react');
var GenericView = require('GenericView');
var CarController = require('CarController');
import { FormControl, ControlLabel } from 'react-bootstrap';

var CarView = React.createClass({
	
	getForm: function(data, me) {

		return (
			<div className={'standard-form'}>
				<div className={'show-inline'}>
					<div>
						<ControlLabel>Modelo</ControlLabel>
						<FormControl
				            type="text"
				            value={data.MODEL}
				            placeholder=""
				            onChange={(comp) => {me.onChange('MODEL', comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Fabricante</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.MAKER}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('MAKER', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Ano</ControlLabel>
						<FormControl
				            type="text"
				            value={data.MAKEYEAR}
				            placeholder=""
				            onChange={(comp) => {me.onChange('MAKEYEAR',comp)}}
				        />
				    </div>
					<div>
						<ControlLabel>KM</ControlLabel>
						<FormControl
				            type="text"
				            value={data.KM}
				            placeholder=""
				            onChange={(comp) => {me.onChange('KM',comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Placa</ControlLabel>
						<FormControl
				            type="text"
				            value={data.PLATE}
				            placeholder=""
				            onChange={(comp) => {me.onChange('PLATE',comp)}}
				        />
			        </div>
				    <div>
						<ControlLabel>Cor</ControlLabel>
						<FormControl
				            type="text"
				            value={data.NMCOLOR}
				            placeholder=""
				            onChange={(comp) => {me.onChange('NMCOLOR',comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Portas</ControlLabel>
						<FormControl
			            	componentClass="select"
			            	value={data.DOORS}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('DOORS',comp)}}>
			            	<option value="2">2</option>
        					<option value="3">3</option>
        					<option value="4">4</option>
        				</FormControl>
			        </div>
			    </div>
			    <div className={'show-inline'}>
					<div>
						<ControlLabel>Valor de compra</ControlLabel>
						<FormControl
				            type="text"
				            value={data.BUYVALUE}
				            placeholder=""
				            onChange={(comp) => {me.onChange('BUYVALUE',comp)}}
				        />
				    </div>
				    <div>
						<ControlLabel>Valor de venda</ControlLabel>
						<FormControl
				            type="text"
				            value={data.SELLVALUE}
				            placeholder=""
				            onChange={(comp) => {me.onChange('SELLVALUE',comp)}}
				        />
				    </div>
			    </div>
			    <div className={'show-inline'}>
					<div>
						<ControlLabel>Opcionais (Separados por virgula por enquanto)</ControlLabel>
						<FormControl
				            type="text"
				            value={data.OPTIONALS}
				            placeholder=""
				            onChange={(comp) => {me.onChange('OPTIONALS',comp)}}
				        />
				    </div>
			    </div>
			</div>
		);	
	},

	render: function () {

		return (
			<GenericView
				controller={CarController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = CarView;

exports.getFormCar = CarView.getForm;