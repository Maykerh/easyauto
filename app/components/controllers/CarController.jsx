var Axios = require('axios');

var getAll = (callback) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/car/'
	}).then((response) => {
			var normalizedData = normalizeTableData(response);
			callback(normalizedData);
		}
	);
};

exports.getAll = getAll;

var getAllAvailable = (callback, id) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/car/getAllAvailable/' + id
	}).then((response) => {
			var normalizedData = normalizeTableData(response);
			callback(normalizedData);
		}
	);
};

exports.getAllAvailable = getAllAvailable;

var getOne = (callback, id) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/car/' + id
	}).then((response) => {
		callback(response['data'][0]);
	});
};

exports.getOne = getOne;

var insert = (callback, data) => {
	Axios({
		method: 'post',
		url: 'http://localhost:8081/car',
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
		url: 'http://localhost:8081/car/' + id,
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
		url: 'http://localhost:8081/car/' + ids.join(',')
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
			id: line.IDCAR,
			columns: [
				line.MODEL, 
				line.MAKER, 
				line.DOORS, 
				line.KM, 
				line.NMCOLOR, 
				line.PLATE, 
				line.MAKEYEAR, 
				line.BUYVALUE, 
				line.SELLVALUE, 
				line.OPTIONALS 
			]
		});
	});

	return normalizedData;
};

exports.normalizeTableData = normalizeTableData;

var getHeaders = () => {
	
	return  [
		"Modelo",
		"Fabricante",
		"Portas",
		"KM",
		"Cor",
		"placa",
		"Fabricação",
		"Preço de compra",
		"Preço de venda",
		"Opcionais"
	];
};

exports.getHeaders = getHeaders;

var getInitialData = () => {

	return {
		MODEL: null,
		MAKER: null,
		DOORS: 2,
		KM: null,
		NMCOLOR: null,
		PLATE: null,
		MAKEYEAR: null,
		BUYVALUE: null,
		SELLVALUE: null,
		OPTIONALS: null
	}
};

exports.getInitialData = getInitialData;