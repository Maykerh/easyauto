var Axios = require('axios');

var getAll = (callback) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/customer/'
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
	 	url: 'http://localhost:8081/customer/' + id
	}).then((response) => {
		callback(response['data'][0]);
	});
};

exports.getOne = getOne;

var insert = (callback, data) => {

	Axios({
		method: 'post',
		url: 'http://localhost:8081/customer',
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
		url: 'http://localhost:8081/customer/' + id,
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
		url: 'http://localhost:8081/customer/' + ids.join(',')
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
			id: line.IDCUSTOMER,
			columns: [
				line.NAME + " " + line.LASTNAME,
				line.CITY,
				line.STATE,
				line.NEIGHBORHOOD,
				line.STREET,
				line.NUMBER,			
				line.CPF,
				line.PHONE,
				line.EMAIL
			]
		});
	});

	return normalizedData;
};

exports.normalizeTableData = normalizeTableData;

var getHeaders = () => {
	
	return  [
		"Nome",
		"Cidade",
		"Estado",
		"Bairro",
		"Rua",
		"Número",
		"CPF",
		"Telefone",
		"Email"
	];
};

exports.getHeaders = getHeaders;

var getInitialData = () => {

	return {
		NAME: null,
		LASTNAME: null,
		CITY: null,
		STATE: null,
		NEIGHBORHOOD: null,
		STREET: null,
		NUMBER: null,
		CPF: null,
		PHONE: null,
		EMAIL: null
	};
};

exports.getInitialData = getInitialData;