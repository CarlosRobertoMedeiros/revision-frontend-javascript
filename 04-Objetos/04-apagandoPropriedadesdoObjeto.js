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

//Consultando objetos
console.log(joao);

//Apagando propriedade de alguns objetos
delete joao.idade;
console.log(joao);

//outra maneira
delete joao['endereco'].estado;
console.log(joao);

