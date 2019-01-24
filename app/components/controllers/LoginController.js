var Axios = require('axios');

var validateLogin = (data, callbackOk, callbackError) => {
	Axios({
	  	method: 'post',
	 	url: 'http://localhost:8081/user/login',
	 	data: data
	}).then((response) => {
			if(response.data.validateLogin)
				callbackOk(response.data);
			else
				callbackError();

		}
	);
};

exports.validateLogin = validateLogin;