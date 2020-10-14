/*
	Function Declaration
*/
function soma(a,b){
	return a+b;
}
console.log(soma(10,2));//12

/*
	Function Expression
*/

var soma = function(a,b){
	return a+b;
}

console.log(soma(5,2));//7


/*
	Named Function Expression
	O nome da funao pode ser útil pois aparece no stack trace,
	listas de breakpoints e demais ferramentas de debbuging
*/
var soma = function soma(a,b){
	return a+b;
}

console.log(soma(3,2));//5


/*
	Com relação a Function Declaration
	Ela é carregada antes do código ser interpretado
	Apliaca-se o Hoisting

	Para a function Expression isso não funciona
*/

console.log(subtrair(4,2))//2;

function subtrair(a,b){
	return a-b;
}

/*
	Conclusão a 
		function declaration é carregada antes(Hosting) e a 
		function expression não
*/

/*
	Invocação de Funções
*/

/*
	Invocando uma função diretamente no escopo global
*/
var soma = function(a,b){
	return a+b;
}
console.log(soma(2,2));


/*
	Passagem de função por parâmetros
	Lambda
*/
var produto = {nome:'Sapato',preco:150};

var formulaImpostoA = function(preco){return preco*0.1;}
var formulaImpostoB = function(preco){return preco*0.2;}

var calcularPreco = function(produto,formulaImposto){
	return produto.preco+formulaImposto(produto.preco);
}

//chamada
console.log(calcularPreco(produto,formulaImpostoA))//165
console.log(calcularPreco(produto,formulaImpostoB))//180


/*
	Retornando uma função
*/

var helloWorld = function(){
	return function(){
		return 'Hello World!';
	};
};

console.log(helloWorld);//[Function: helloWorld]
console.log(helloWorld());//[Function (anonymous)]
console.log(helloWorld()());//Hello World!



/*
	Invocando uma função por meio de um objeto
*/
//Utilizando uma função como método, declarada dentro do objeto
var pessoa = {
	nome: 'João',
	idade: 20,
	getIdade:function(){
		return this.idade;
	}
}

console.log(pessoa);//{ nome: 'João', idade: 20, getIdade: [Function: getIdade] }
console.log(pessoa.getIdade());//20


//Invocando o método por fora usando o this
var getIdade = function(){
		return this.idade;
};

var pessoa = {
	nome: 'João',
	idade: 20,
	getIdade: getIdade
}
console.log(getIdade);//20
console.log(pessoa.getIdade());//20



//Invocando uma função com call e apply
/*
Toda Função possui os métodos call() e apply().
Eles são utilizados para indicar em qual escopo
uma função deve ser executada.

A diferença é basicamente a forma como é utilizado:

funcao.call(escopo,parametro1,parametro2)
funcao.apply(escopo,parametros)
*/
//Usando o exemplo anterior
var getIdade = function(extra){
		console.log('arguments',arguments)//toda função sempre tem os seus argumentos
		return this.idade + extra;
};

var pessoa = {
	nome: 'João',
	idade: 20,
	getIdade: getIdade
}
console.log(pessoa.getIdade(2));//20
console.log(getIdade.call(pessoa,2));//20 Aqui eu passo a pessoa como contexto
console.log(getIdade.apply(pessoa,[2]));//20 Aqui eu passo a pessoa como contexto

/*
	Invocando uma função por meio do Operador New
*/
//Funções Construtoras vs Funções Fábricas

//Função Fábrica
var criarPessoa = function(nome, idade){
	return {
		nome:nome,
		idade:idade
	}
}
console.log(criarPessoa('Pedro',20));//{ nome: 'Pedro', idade: 20 }
console.log(criarPessoa('Maria',30));//{ nome: 'Maria', idade: 30 }

//Função Construtora
//Por convenção começa com letra Maiúscula
var Pessoa = function(nome, idade){
	this.nome = nome;
	this.idade= idade;
}
console.log(new Pessoa('Pedro',20));//Pessoa { nome: 'Pedro', idade: 20 }
console.log(new Pessoa('Maria',30));//Pessoa { nome: 'Maria', idade: 30 }

//Criando objetos Diretamente
var pedro = {};
Pessoa.call(pedro,"Pedro",20);
console.log(pedro);//{ nome: 'Pedro', idade: 20 }

//Exemplos com call
var maria = {};
Pessoa.call(maria,"Maria",30);
console.log(maria);//{ nome: 'Maria', idade: 30 }

//Qual a melhor estratégica para criar funções
// Bom senso e entender os pros e contra


//Closures => Fechamento Encerramento

var helloWorld = function(){
	var message = 'Hello World!';
	return function(){
		return message;
	};
};

console.log(helloWorld); //[Function: helloWorld]
console.log(helloWorld()); //[Function (anonymous)]
console.log(helloWorld()()); //Hello World!