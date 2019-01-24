var Axios = require('axios');

var getAll = (callback) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/sale/'
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
	 	url: 'http://localhost:8081/sale/' + id
	}).then((response) => {
		callback(response['data'][0]);
	});
};

exports.getOne = getOne;

var insert = (callback, data) => {

	Axios({
		method: 'post',
		url: 'http://localhost:8081/sale',
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
		url: 'http://localhost:8081/sale/' + id,
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
		url: 'http://localhost:8081/sale/' + ids.join(',')
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
			id: line.IDSALE,
			columns: [
				line.TOTALVALUE,
				line.PAYMENTDATE,
				line.DUEDATE,
				line.PAYMENTCODE
			]
		});
	});

	return normalizedData;
};

exports.normalizeTableData = normalizeTableData;

var getHeaders = () => {
	
	return  [
		"Valor total",
		"Data de vencimento",
		"Data do pagamento",
		"Código do pagamento"
	];
};

exports.getHeaders = getHeaders;

var getInitialData = () => {

	return {
		TOTALVALUE: null,
		DUEDATE: null,
		PAYMENTDATE: null,
		PAYMENTCODE: null
	}
};

exports.getInitialData = getInitialData;