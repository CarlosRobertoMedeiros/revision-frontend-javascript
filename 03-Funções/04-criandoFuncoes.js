// function declaration
function somar(a,b){
	return a+b;
}
console.log(somar(10,2));//12

//function expression
var subtrair = function subtrair(a,b){
	return a-b;
}
console.log(subtrair(10,2));//8

/* Qual seria a diferença 
Em JavaScript eu posso executar uma função
e depois utilizar a sua declaração se for do tipo function declaration
O Hoisting Funciona
Ex.
*/ 
console.log(multiplicar(10,2));//20

function multiplicar(a,b){
	return a*b;
}

/* 
Esse método está comentado pois dá erro
Eu não consigo realizar o mesmo procedimento de executar uma função em seguida a sua declaração
se a função for do tipo function expression
O Hoisting Não Funciona
O retorno seria: resultadoDivisao não foi definido
*/
/*
console.log(resultadoDivisao(10/2));

resultadoDivisao = function(a,b){
	return a/b;
}
*/

//Ao chamar uma função que não retorna nada ele retorna undefined
//Dentro de toda função existe uma função chamada arguments
//o arguments é uma tupla informando chave e valor de cada objeto
//Seria legal utilizar para debugger
function testaArgumentos(a,b){
	console.log('argumentos =>',arguments);
	return a.concat(b);
}
console.log(testaArgumentos('a','b'));

//No Js uma função é um tipo de dado
console.log(typeof(subtrair)); //function a vantagem é tipo ser um lambda do java






