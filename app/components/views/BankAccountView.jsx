var React = require('react');
var GenericView = require('GenericView');
var BankAccountController = require('BankAccountController');
import { FormControl, ControlLabel } from 'react-bootstrap';

var BankAccountView = React.createClass({
	
	getForm: function(data, me) {

		return (
			<div className={'standard-form'}>
				<div className={'show-inline'}>
					<div>
						<ControlLabel>Nome do titular</ControlLabel>
						<FormControl
				            type="text"
				            value={data.OWNERNAME}
				            placeholder=""
				            onChange={(comp) => {me.onChange('OWNERNAME', comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Numero da conta</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.ACCOUNTNUMBER}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('ACCOUNTNUMBER', comp)}}
			        	/>
			        </div>
			        <div>
			        	<ControlLabel>Agência</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.AGENCY}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('AGENCY', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Banco</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.BANKNAME}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('BANKNAME', comp)}}
			        	/>
					</div>
					<div>
						<ControlLabel>Usuário</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.USERNAME}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('USERNAME', comp)}}
			        	/>
					</div>
					<div>
						<ControlLabel>Senha</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.PASSWORD}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('PASSWORD', comp)}}
			        	/>
					</div>
			    </div>
			</div>
		);
	},

	render: function () {

		return (
			<GenericView
				controller={BankAccountController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = BankAccountView;