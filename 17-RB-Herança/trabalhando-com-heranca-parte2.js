/*
	Criando objetos diretamente
*/

var joao = {
	nome:'João',
	idade:20,
	sexo:'Masculino'
};

var pedro = {
	nome:'Pedro',
	idade:18,
	sexo:'Masculino'
};

console.log(joao);//{ nome: 'João', idade: 20, sexo: 'Masculino' }
console.log(pedro);//{ nome: 'Pedro', idade: 18, sexo: 'Masculino' }


/*
	Criando objetos utilizando uma função Fábrica
*/

var criarHomem = function(nome,idade){
	return {
		nome:nome,
		idade:idade,
		sexo:'masculino'
	};
};

var joao = criarHomem('João',20);
var pedro = criarHomem('Pedro',18);

console.log(joao);//{ nome: 'João', idade: 20, sexo: 'masculino' }
console.log(pedro);//{ nome: 'Pedro', idade: 18, sexo: 'masculino' }


/*
	O operador new cria um objeto por meio de
	uma função construtora
	Olhar a convençao pois a função utiliza letra maíscula no início do nome
*/

var Homem = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
	this.sexo ='masculino';
};

var joao = new Homem('João',20);
var pedro = new Homem('Pedro',18);

console.log(joao);//{ nome: 'João', idade: 20, sexo: 'masculino' }
console.log(pedro);//{ nome: 'Pedro', idade: 18, sexo: 'masculino' }

//Link https://www.youtube.com/watch?v=hDhoO86cfh8&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=15
//Continuar a partir do 3 minutos ultimo vídeo







