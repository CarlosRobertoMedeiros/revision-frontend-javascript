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
console.log(joao);//{ nome: 'João', idade: 20, sexo: 'masculino' }

/*Exemplo diferente usando call*/
var pedro = {};
Homem.call(pedro, 'Pedro',18);
console.log(pedro);//{ nome: 'Pedro', idade: 18, sexo: 'masculino' }



/*Exemplo diferente usando apply, modifica a passagem por parâmetros */
var pedro = {};
Homem.apply(pedro, ['Pedro',18]);
console.log(pedro);//{ nome: 'Pedro', idade: 18, sexo: 'masculino' }

/*
	Diferenças entre [[Prototype]] e prototype?

	[[Prototype]] = conceito de protótipos em Javascript o conjunto de chaves e valores
	prototype     = Essa seria uma propriedade qu só existem em funções devido ao conceito de 
					herança por intermédio de função construtora
*/

//Criando Objetos com uma função construtora

var Homem = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João',20);
console.log(joao);
console.log(joao.sexo);


var pedro = {};
//pedro.__proto__ = Homem.prototype; //1 maneira de associar
pedro.prototype = Homem.prototype; //2 maneira e associar

Homem.call(pedro,'Pedro',18);
console.log(pedro);
console.log(pedro.sexo);


//Criando a minha função new
//Apenas para fechar o conceito de prototype da função
//Apenas uma idéia para verificação
var _new = function(f){
	var obj = {};
	obj.__proto__=f.prototype;
	f.apply(obj, Array.prototype.slice.call(arguments, 1));

	return obj;
};

var pedro = _new(Homem,'Pedro',18);

/*
	Conselho
	Não esqueça de utilizar o operador new quando utilizar
	funções construtoras
*/











//Link https://www.youtube.com/watch?v=hDhoO86cfh8&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=15
//Continuar a partir do 3 minutos ultimo vídeo









