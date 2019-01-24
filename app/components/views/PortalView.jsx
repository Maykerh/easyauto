var React = require('react');
var PortalController = require('PortalController');
var GenericView = require('GenericView');
import { FormControl, ControlLabel } from 'react-bootstrap';

var PortalView = React.createClass({
	
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
			        	<ControlLabel>Endereço web</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.WEBADDRESS}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('WEBADDRESS', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Cor</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.MAINCOLOR}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('MAINCOLOR', comp)}}
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
			        <div>	
			          	<ControlLabel>Telefone</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.PHONE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('PHONE', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Logo ('trocar para upload de imagem')</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.LOGO}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('LOGO', comp)}}
			        	/>
					</div>			        
			    </div>
			</div>
		);
	},

	render: function () {
		
		return (
			<GenericView
				controller={PortalController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = PortalView;