var React = require('react');
var ProductController = require('ProductController');
var GenericView = require('GenericView');
import { FormControl, ControlLabel } from 'react-bootstrap';

var ProductView = React.createClass({
	
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
			        	<ControlLabel>Fabricante</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.MAKER}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('MAKER', comp)}}
			        	/>
			        </div>
			    	<div>
						<ControlLabel>Categoria</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.CATEGORY}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('CATEGORY', comp)}}
			        	/>
					</div>
			    </div>
			    <div className={'show-inline'}>
					<div>
						<ControlLabel>Valor de compra</ControlLabel>
						<FormControl
				            type="text"
				            value={data.BUYVALUE}
				            placeholder=""
				            onChange={(comp) => {me.onChange('BUYVALUE', comp)}}
				        />
				    </div>
				    <div>
			        	<ControlLabel>Valor de venda</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.SELLVALUE}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('SELLVALUE', comp)}}
			        	/>
			        </div>
			    	<div>
						<ControlLabel>Quantidade</ControlLabel>
						<FormControl
			            	type="text"
			            	value={data.QUANTITY}
			            	placeholder=""
			            	onChange={(comp) => {me.onChange('QUANTITY', comp)}}
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
				controller={ProductController}
				getForm={this.getForm}
			/>
		);
	}
});

module.exports = ProductView;