/*
	Idéia força de encapsulamento
*/

function incrementar(){
	var valor =0;

	//Função Interna
	//Tem acesso aos valores de cima
	//Com a closure eu não perco o valor da variável
	//A idéia da closure é manter isso
	return function(){
		return ++valor;
	}

}

var fn = incrementar();

console.log(fn()); //1
console.log(fn()); //2
console.log(fn()); //3


//Funções Autoexecutáveis
// A diferença é abrir o parêntese antes do '('  function
//e fecho no final ')', em seguida eu preciso () para executar a função interna
//na chama da faz conforme o console.log(incrementar())
var incrementar = (function(){
	var valor =0;

	return function(){
		return ++valor;
	}
})();

console.log(incrementar());//1
console.log(incrementar());//2
console.log(incrementar());//3

