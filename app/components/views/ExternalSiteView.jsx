var React = require('react');
var ExternalSiteController = require('ExternalSiteController');
var GenericView = require('GenericView');
import { FormControl, ControlLabel } from 'react-bootstrap';

var ExternalSiteView = React.createClass({
	
	getForm: function(data, me) {
		
		return (
			<div className={'standard-form'}>
				<div className={'show-inline'}>
					<div>
						<ControlLabel>Nome do site</ControlLabel>
						<FormControl
				            type="text"
				            value={data.NAME}
				            placeholder=""
				            onChange={(comp) => {me.onChange('NAME', comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Nome de usuário</ControlLabel>
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
			    <div className={'show-inline'}>
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
			</div>
		);
	},

	render: function () {
		
		return (
			<GenericView
				controller={ExternalSiteController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = ExternalSiteView;