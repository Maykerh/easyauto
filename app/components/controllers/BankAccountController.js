var Axios = require('axios');

var getAll = (callback) => {
	Axios({
	  	method: 'get',
	 	url: 'http://localhost:8081/bankAccount/'
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
	 	url: 'http://localhost:8081/bankAccount/' + id
	}).then((response) => {
		callback(response['data'][0]);
	});
};

exports.getOne = getOne;

var insert = (callback, data) => {

	Axios({
		method: 'post',
		url: 'http://localhost:8081/bankAccount',
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
		url: 'http://localhost:8081/bankAccount/' + id,
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
		url: 'http://localhost:8081/bankAccount/' + ids.join(',')
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
			id: line.IDBANKACCOUNT,
			columns: [
				line.OWNERNAME,
				line.ACCOUNTNUMBER,
				line.AGENCY,
				line.BANKNAME,
				line.USERNAME,
				line.PASSWORD 
			]
		});
	});

	return normalizedData;
};

exports.normalizeTableData = normalizeTableData;

var getHeaders = () => {
	
	return [
		"Nome do titular",
		"Número da conta",
		"Banco",
		"Agência",
		"Usuário",
		"Senha"
	];
};

exports.getHeaders = getHeaders;

var getInitialData = () => {

	return {
		OWNERNAME: null,
		ACCOUNTNUMBER: null,
		AGENCY: null,
		BANKNAME: null,
		USERNAME: null,
		PASSWORD: null 
	};
};

exports.getInitialData = getInitialData;