var React = require('react');
var UserController = require('UserController');
var GenericView = require('GenericView');
import { FormControl, ControlLabel } from 'react-bootstrap';

var UserView = React.createClass({
	
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
						<ControlLabel>Login</ControlLabel>
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
			            	type="password"
			            	value={data.PASSWORD}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('PASSWORD', comp)}}
			        	/>
			        </div>
			        <div>	
			          	<ControlLabel>Permissão</ControlLabel>
						<FormControl
			            	componentClass="select"
			            	value={data.USERTYPE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('USERTYPE', comp)}}>
			            	<option value="1">Administrador</option>
        					<option value="2">Usuário</option>
        				</FormControl>
			        </div>
			    </div>
			</div>
		);
	},

	render: function () {
		
		return (
			<GenericView
				controller={UserController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = UserView;