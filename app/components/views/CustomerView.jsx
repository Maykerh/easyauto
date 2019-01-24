var React = require('react');
var CustomerController = require('CustomerController');
var GenericView = require('GenericView');
import { FormControl, ControlLabel } from 'react-bootstrap';

var CustomerView = React.createClass({
	
	getForm: function(data, me) {
		
		return (
			<div className={'standard-form'}>
				<div className={'show-inline'}>
					<div>
						<ControlLabel>Nome</ControlLabel>
						<FormControl
				            type="text"
				            value={data.NAME}
				            placeholder=""
				            onChange={(comp) => {me.onChange('NAME', comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Sobrenome</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.LASTNAME}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('LASTNAME', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Cidade</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.CITY}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('CITY', comp)}}
			        	/>
					</div>
					<div>	
			          	<ControlLabel>Estado</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.STATE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('STATE', comp)}}
			        	/>
			        </div>
			        <div>	
			          	<ControlLabel>Bairro</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.NEIGHBORHOOD}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('NEIGHBORHOOD', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Rua</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.STREET}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('STREET', comp)}}
			        	/>
					</div>
					<div>	
			          	<ControlLabel>Numero</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.NUMBER}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('NUMBER', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>CPF</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.CPF}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('CPF', comp)}}
			        	/>
					</div>
					<div>	
			          	<ControlLabel>Telefone</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.PHONE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('PHONE', comp)}}
			        	/>
			        </div>
			        <div>	
			          	<ControlLabel>Email</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.EMAIL}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('EMAIL', comp)}}
			        	/>
			        </div>
			    </div>
			</div>
		);
	},

	render: function () {
		
		return (
			<GenericView
				controller={CustomerController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = CustomerView;