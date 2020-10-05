//Criando um objeto aninhado
var joao = {
	nome:'João',
	idade:25,
	endereco: {
		logradouro: 'Av Brasil',
		numero: '100',
		complemento: 'Não sei',
		numero: '502',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

//lista todas as propriedades em prop do objeto joao
for (var prop in joao){
	console.log(prop,'->',joao[prop]);

	if (prop==='idade'){
		console.log('achei a idade',joao[prop]);
		break;
	}
}