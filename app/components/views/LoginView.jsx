var React = require('react');
var LoginController = require('LoginController');
import { FormControl, ControlLabel, Button } from 'react-bootstrap';

var style = {
	page: {
		height: '100vh',
		background: "url('https://www.mercedes-benz.com/wp-content/uploads/sites/3/2014/10/classic_classic-store_amg-shop_05-1180x686.jpg') no-repeat",
		display: 'flex',
		backgroundSize: 'cover',
		justifyContent: 'center'
	},
	formBox: {
		backgroundColor: '#FFF',
		alignSelf: 'center',
		width: '400px',
		height: '207px',
		padding: '20px',
		borderRadius: '5px'
	},
	lineSpace: {
		marginBottom: '10px'
	},
	showInline: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
}

var LoginView = React.createClass({

	getInitialState: function() {
		return {
			USERNAME: '',
			PASSWORD: '',
			errMsg: false
		};
	},

	onChange: function(id, value) {
		this.setState({
			[id]: value.target.value
		});
	},

	onLoginOK: function(data) {

		this.props.onLogin(data);
	},

	onLoginFail() {
		this.setState({
			errMsg: true
		});
	},

	onEnter: function() {
		this.onLoginOk();
		// LoginController.validateLogin(this.state, this.onLoginOK, this.onLoginFail);
	},

	render: function() {
		var {PASSWORD, USERNAME, errMsg} = this.state;

		var alertMsg = (
			<div className={"alert-danger"}>
			   {"Usuário e/ou senha inválidos"}
			</div>
		);

		return (
			<div style={style.page}>
				<div style={style.formBox}>
				    <div style={style.lineSpace}>
			        	<ControlLabel>Usuário</ControlLabel>
						<FormControl
			            	type="text"
			            	value={USERNAME}
			            	placeholder=""
			            	onChange={(comp) => {this.onChange('USERNAME', comp)}}
			        	/>
			        </div>
		        	<div style={style.lineSpace}>
		        		<ControlLabel>Senha</ControlLabel>
		        		<FormControl
		                    type="password"
		                    value={PASSWORD}
		                    placeholder=""
		                    onChange={(comp) => {this.onChange('PASSWORD', comp)}}
		                />
		            </div>
		            <div style={style.lineSpace, style.showInline}>
		            	<div>
		            		{errMsg ? alertMsg : null}
		            	</div>
		            	<div className={'pull-right'} >
				            <Button 
				            	bsStyle="primary" 	
				            	onClick={this.onEnter}>
								{'Entrar'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LoginView;