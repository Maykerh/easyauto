var React = require('react');
var ServiceController = require('ServiceController');
var GenericView = require('GenericView');
import { FormControl, ControlLabel } from 'react-bootstrap';

var ServiceView = React.createClass({
	
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
			        	<ControlLabel>Valor</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.VALUE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('VALUE', comp)}}
			        	/>
			        </div>
			    </div>
			    <div className={'show-inline'}>
			    	<div>
						<ControlLabel>Descrição</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.DESCRIPTION}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('DESCRIPTION', comp)}}
			        	/>
					</div>
			    </div>
			</div>
		);
	},

	render: function () {
		
		return (
			<GenericView
				controller={ServiceController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = ServiceView;