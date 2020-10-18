console.log(0 =='');//true String Vazia o retorno é true
console.log(0 =='0');//true String e number sendo mesmo valor é possível
console.log(false == undefined); //false
console.log(false == null); //false
console.log(undefined == null); //true
console.log(1 == true); //true
console.log(0 == false); //true
console.log(0 == '\n'); //true
console.log(10 == new Number(10)); //true

/*
	Que mágica é essa chamada coersão de tipos?

	console.log(10=='10')

	se x é number e y é string, a comparação será feita da seguinte forma
	x == toNumber(y). Como o resultado de toNumber('10') é 10, o retorno é true

	10 = new Number(10) //true

	se x é number e Y é object, a comparação será feita da seguinte forma:
	x==toPrimitive(y), que utiliza a operação valueOf, ou toString() caso valueOf não exista,
	do objeto para compará-lo com um Number. o retorno da operação valueOf nesse caso é 10,
	sendo assim o retorno é true

*/

/*
	Link de Especificação da Linguagem EcmaScript
	http://www.ecma-international.org/ecma-262/
*/

//Utilize os operadores ====(muito igual) e !==(muito diferente)

//Como fazer para comparar dois objetos em Javascript?
var x = {};
var y = {};
console.log(x===y);//false

var z = x;
console.log(x===z);//true


/*
	Operadores lógicos
	
	Além de ser curto-circuito, o retorno é um de seus operandos
*/
console.log(0 || 2);//2 o 0 é false 2 é true eu retorno 2
console.log(1 || 2);//1 o 1 é true já faz direto por ser um curto cirtcuito

console.log(1 && 2);//2 1 é true 2 é true retorna o ultimo
console.log(0 && 2);//0 0 é false e já retorno o 0

/*
	Aplicando em estrutura condicional
*/

if (10){
	console.log('Ok');
}

/*
	Quando avaliados situações boleanas, os tipos 
	assumem valores truthy ou falsy por meio da operação
	abstrata ToBoolean
*/

/*
	Valores de comparação que nos levam a false
*/
/* EXCEÇÃO DE COMPARAÇÃO */
console.log(!!0);//false
console.log(!!NaN);//false
console.log(!!'');//false
console.log(!!false);//false
console.log(!!undefined);//false
console.log(!!null);//false

//Todo resto de comparação é true



var gerandoSerial = function(max){
	return Math.floor(Math.random()*max);
};

console.log(gerandoSerial(1000));//155
console.log(gerandoSerial(100));//85
console.log(gerandoSerial(10));//3
console.log(gerandoSerial());//NaN

//Opções de Inicialização 1
var gerandoSerial = function(max){

	//Protegendo o NaN
	if (max=== undefined || max === null || max=== 0) {
		max = 1000;
	}
	return Math.floor(Math.random()*max);
};

console.log(gerandoSerial(1000));//155
console.log(gerandoSerial(100));//85
console.log(gerandoSerial(10));//3
console.log(gerandoSerial());//208

//Opções de Inicialização 2
var gerandoSerial = function(max){

	//Protegendo o NaN
	if (!max){ //aqui chama um toBoolean
		max = 1000;
	}
	
	return Math.floor(Math.random()*max);
};

console.log(gerandoSerial(1000));//155
console.log(gerandoSerial(100));//85
console.log(gerandoSerial(10));//3
console.log(gerandoSerial());//208


//Opções de Inicialização 2
var gerandoSerial = function(max){

	//Protegendo o NaN
	max = max || 1000;
	
	return Math.floor(Math.random()*max);
};

console.log(gerandoSerial(1000));//155
console.log(gerandoSerial(100));//85
console.log(gerandoSerial(10));//3
console.log(gerandoSerial());//208


/*
	Tem muita diferença entre os operadores 
	| e & e || e && ?

*/
console.log(1 || 2)//1 true o primeiro
console.log(1 | 2)//3 true o primeiro
console.log(1 && 2)//2 mostra o ultimo e ambos são true
console.log(1 & 2)//0 false

/*
IMPORTANTE PARA RELEMBRAR

Ao utilizar um | só eu utilizo uma operação bitwise, ou seja a implementação bit a bit
Ex1.

1 | 2  = 0001 = 1
       = 0010 = 2
       = 0011 = 3

       Explicação 1 ou 0 é 1
          
Ex2.
1 & 2 = 0001 =1
      = 0010 =2
      = 0000 =0

      Explicação 1 e 0 é 0


*/

/*
	Existem ainda outros operadores
	para realizar operações bit a bit
	como negação ~, ou exclusivo ^
	e deslocamento de bits >> , << e >>>
*/

/*
	Operadores especiais da Linguagem js
*/
// typeof retorna o tipo do operando
// na pratica temos number, string, boolean, undefined e o resto é object
console.log(typeof(10));//number
console.log(typeof('Carlos Roberto'));//string
console.log(typeof(true));//boolean
console.log(typeof(undefined));//undefined
console.log(typeof(null));//object
console.log(typeof{});//object
console.log(typeof(/abc/));//object
console.log(typeof([]));//object
console.log(typeof(new Date()));//object

//new Constroi um objeto com base em uma função construtora
var Pessoa = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

var pedro = new Pessoa('Antônio',20);
console.log(pedro);//{ nome: 'Antônio', idade: 20 }

//instanceof = verifica se o objeto possui a função construtora
// 		em sua cadeia de protótipos
//      é uma operaçãio is a

var Pessoa = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

var pedro = new Pessoa('Antônio',20);
console.log(pedro);//{ nome: 'Antônio', idade: 20 }
console.log(pedro instanceof Pessoa);//true
console.log(pedro instanceof Date);//false

//in Verifica se a propriedade faz parte do objeto
var Pessoa = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

console.log('nome' in pedro);//true
console.log('sexo' in pedro);//false

//delete Apaga a propriedade de um determinado objeto
var pedro = new Pessoa('Antônio',20);
console.log(pedro);//{ nome: 'Antônio', idade: 20 }
delete pedro.nome;
console.log(pedro);//{ idade: 20 }

/*
	Operadores de comparação 
	<,>,<=,>=

	Operadores aritméticos
	+,-,*,/ e %(mod)

	Operadores de Atribuição
	+=, -=, *=, /=, %=

	Operadores de Incremento e Decremento ++ e --

*/

var x =0;
console.log(x++);//0 atribui o valor em x e depois imprime
console.log(++x);//1 Imprime primeiro depois atribui o valor em x

/*
	Operador ternário
	(expressão) ? true: false
*/
var idade = 20;
console.log( (idade>=18)? 'Maior Idade':'Menor idade' )//Maior Idade