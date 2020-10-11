/*
	Padrão utilizado para encapsulamento de Js.
	Esconder o campo valor, pois ele deveria simular o valor 'Privado'
	Link Default do Addy Osmani: https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html

*/
var contador = {

	valor:0,
	incrementar: function(){
		return this.valor++;
	},
	reset: function(){
		console.log('Valor do Contador Agora', this.valor);
		this.valor =0;

	}

}

contador.incrementar();
contador.incrementar();
contador.reset();
contador.incrementar();
contador.reset();

//Como Resolver o encapsulamento
// detalhes função tem que ser autoéxecutável 
//Ex. 
/* Método que deve ser implementado e retorna um valor
var contador2 = (function(){

})();
*/
var contador2 = (function(){
	var valor = 0; //Agora está privado

	var incrementar = function(){
			return valor++;
	};

	var reset = function(){
			console.log('valor do contador antes de resetar',valor);
			valor=0;
	};
	
	return {
		incrementar:incrementar,
		reset:reset
	}

})();

//Testando 
contador2.incrementar();
contador2.incrementar();
contador2.reset();
contador2.incrementar();
contador2.reset();