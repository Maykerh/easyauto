var Axios = require('axios');

var getAll = (callback) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/portal/'
	}).then((response) => {
			var normalizedData = normalizeTableData(response);

			callback(normalizedData);
		}
	);
};

exports.getAll = getAll;

var getOne = (callback, id) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/portal/' + id
	}).then((response) => {
		callback(response['data'][0]);
	});
};

exports.getOne = getOne;

var insert = (callback, data) => {

	Axios({
		method: 'post',
		url: 'http://localhost:8081/portal',
		data: data
	}).then((response) => {
		if (response.status == 200)
			alert('Registro salvo com sucesso');

		callback();
	}).catch(error => {
    	if(error.response.status == 409)
			alert('Registro já existente');
		else
			alert('Ops! algo deu errado, tente novamente');
	});
};

exports.insert = insert;

var update = (callback, data, id) => {

	Axios({
		method: 'put',
		url: 'http://localhost:8081/portal/' + id,
		data: data
	}).then((response) => {
		if (response.status == 200)
			alert('Registro salvo com sucesso');

		callback();
	}).catch(error => {
    	if(error.response.status == 409)
			alert('Registro já existente');
		else
			alert('Ops! algo deu errado, tente novamente');
	});
};

exports.update = update;

var deleteReg = (callback, ids) => {

	Axios({
		method: 'delete',
		url: 'http://localhost:8081/portal/' + ids.join(',')
	}).then((response) => {
		if (response.status == 200)
			alert('Registro deletado com sucesso');
		else
			alert('Ops! algo deu errado, tente novamente');

		callback();
	});
};

exports.deleteReg = deleteReg;

var normalizeTableData = (data) => {
	var normalizedData = [];

	data['data'].map((line, index) => {

		normalizedData.push({
			index: index,
			id: line.IDPORTAL,
			columns: [
				line.NAME,
				line.WEBADDRESS,
				line.MAINCOLOR,
				line.PHONE,
				line.EMAIL,
				line.LOGO
			]
		});
	});

	return normalizedData;
};

exports.normalizeTableData = normalizeTableData;

exports.normalizeTableData = normalizeTableData;

var getHeaders = () => {
	
	return  [
		"Nome",
		"Endereço web",
		"Cor",
		"Telefone",
		"Email",
		"Logo"
	];
};

exports.getHeaders = getHeaders;

var getInitialData = () => {

	return {
		NAME: null,
		WEBADDRESS: null,
		MAINCOLOR: null,
		PHONE: null,
		EMAIL: null,
		LOGO: null
	};
};

exports.getInitialData = getInitialData;