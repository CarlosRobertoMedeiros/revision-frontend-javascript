/*
	No Js pode ser utilizado tanto '' quanto ""
*/
var x='Algaworks';
console.log(typeof(x));
console.log(x.length); //É uma propriedade e não uma função //9

var a = 'Carlos Roberto';
var b = 'Carlos Roberto';
console.log(a===b); //true

var mensagem="Seja bem vindo Carlos Roberto";
console.log(mensagem.indexOf("vindo")); //em qual caractere começa a letra v da palavra vindo //9

var mensagem="Seja bem vindo Carlos Roberto";
console.log(mensagem.lastIndexOf("o")); //em qual caractere que começa do fim ao inicio ou retornando -1 caso não encontre //28

//Continuar a partir de 05:40
var s = 'A arte de programar';
console.log(s.substring(2,6)); //arte                //Lembra que a String é imutável 
console.log(s.substring(2));   //arte de programar   

console.log(s.slice(2,6)); //arte
console.log(s.slice(2)); //arte de programar   

/*
  A diferença entre a funcão substring e a função slice é que a slice conta de traz pra frente
  o resto é igual
*/
console.log(s.slice(-17,-13)); //arte

console.log(s.substr(2,4)); //arte a diferença entre o substr e o substring é que no substr é a quantidade de caracteres, inicia na 2 e conta mais 4

//Exemplo Utilizando o replace
var s = 'Seja be vindo <nome>';
var usuarioInformado = s.replace('<nome>','José da Silva');
console.log(usuarioInformado); //arte de programar   

console.log(s.toUpperCase()); //Tudo maiuscula
console.log(s.toLowerCase()); //Tudo minuscula

//Exemplo de Concatenação de String
var m = 'Olá'+' '+'Ricardo';
console.log(m);

var m = "Olá".concat(' ','Ricardo',' ','Antunes'); //Olá Ricardo Antunes
console.log(m);

console.log(m.charAt(4)); //R => Qual String na posição 4












