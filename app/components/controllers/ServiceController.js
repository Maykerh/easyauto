var Axios = require('axios');

var getAll = (callback) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/service/'
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
	 	url: 'http://localhost:8081/service/' + id
	}).then((response) => {
		callback(response['data'][0]);
	});
};

exports.getOne = getOne;

var insert = (callback, data) => {

	Axios({
		method: 'post',
		url: 'http://localhost:8081/service',
		data: data
	}).then((response) => {
		if (response.status == 200)
			alert('Registro salvo com sucesso');
		else if(response.status == 409)
			alert('Registro já existente');
		else
			alert('Ops! algo deu errado, tente novamente');

		callback();
	});
};

exports.insert = insert;

var update = (callback, data, id) => {

	Axios({
		method: 'put',
		url: 'http://localhost:8081/service/' + id,
		data: data
	}).then((response) => {
		if (response.status == 200)
			alert('Registro salvo com sucesso');
		else if(response.status == 409)
			alert('Registro já existente');
		else
			alert('Ops! algo deu errado, tente novamente');

		callback();
	});
};

exports.update = update;

var deleteReg = (callback, ids) => {

	Axios({
		method: 'delete',
		url: 'http://localhost:8081/service/' + ids.join(',')
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
			id: line.IDSERVICE,
			columns: [
				line.NAME,
				line.VALUE,
				line.DESCRIPTION
			]
		});
	});

	return normalizedData;
};

exports.normalizeTableData = normalizeTableData;

var getHeaders = () => {
	
	return  [
		"Nome",
		"Valor",
		"Descrição"
	];
};

exports.getHeaders = getHeaders;

var getInitialData = () => {

	return {
		NAME: null,
		DESCRIPTION: null,
		VALUE: null
	}
};

exports.getInitialData = getInitialData;