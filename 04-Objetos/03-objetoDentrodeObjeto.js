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
//imprimindo o valor interno do objeto
console.log(joao);
console.log('cidade que o joão mora',joao.endereco.cidade);


//alterando o valor do objeto
joao.endereco.numero = '101';
console.log('alterando numero que o joão mora',joao.endereco.numero);

//ao Procurar um atributo inexistente no objeto vai dar undefined

//Usando acesso dinâmico
console.log('Estado', joao['endereco']['estado']);




