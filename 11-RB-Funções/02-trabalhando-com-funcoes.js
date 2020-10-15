/*
	Cuidado com o escopo global para comunicacao

*/

var counter =0;
var add = function(){
	return ++counter;
};

console.log(add());//1
console.log(add());//2
console.log(add());//3


var itens = [];
var add = function (item){
	itens.push(item);
	return itens;
};
console.log(add('A'));//[ 'A' ]
console.log(add('B'));//[ 'A', 'B' ]
console.log(add('C'));//[ 'A', 'B', 'C' ]

/*
	Como a linguagem não possui um ligador ou linker, 
	faz uso de um escopo global compartilhado para estabelecer os 
	vínculos entre diferentes partes de uma aplicação
*/

//Como fazer para ECAPSULAR?

//Encapsulando por meio de objetos Object
var counter = {
	value:0,
	add: function(){
		return ++this.value;
	}
};

console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3

var itens = {
	value: [],
	add: function(item){
		this.value.push(item);
		return this.value;
	}
};

console.log(itens.add('A'));//[ 'A' ]
console.log(itens.add('B'));//[ 'A', 'B' ]
console.log(itens.add('C'));//[ 'A', 'B', 'C' ]	

/*
	A linguagem JS não possui modificadores de visibilidade como 
	private ou public

	Como evitar acessar uma propriedade interna?
*/

//Encapsulando por meio de funções
var counter = function(){
	var value =0;
	var add = function(){
		return ++value;
	};
};

console.log(counter.value);//undefined
console.log(counter.add);

//Utilizando a Factory Function
var criandoContador = function(){
	var value = 0;
	return {
		add : function(){
			return ++value;
		}
	};
};

var counter = criandoContador();
console.log(counter.value);//undefined pois o value ficou encapsulado
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3


//Utilizando a Constructor Function
var Counter = function(){
	var value =0;
	this.add = function(){
		return ++value;
	}
}

var counter = new Counter();
console.log(counter.value);//undefined pois o value ficou encapsulado
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3

/*
	IIFE = Função Imediatamente Invocada
	Utilizando o Module Pattern
*/
var counter = (function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		},
		reset: function(){
			value =0;
		}
	};
})();
console.log(counter.value);//undefined pois o value ficou encapsulado
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3
counter.reset();
console.log(counter.add());//1


/*
	Utilizando o Revealing Module Pattern
	Melhor padrão para gerar encapsulamento
*/
var counter = (function(){

	var _value =0;
	
	var _add = function(){
		return ++_value;
	};

	var _reset = function(){
		_value=0;
	};

	return {
		add : _add,
		reset: _reset	
	};
})();

console.log(counter.value);//undefined pois o value ficou encapsulado
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3
counter.reset();
console.log(counter.add());//1

