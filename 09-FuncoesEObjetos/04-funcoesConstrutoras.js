/*
	Por convenção funcção construtora utiliza letra maiúscula no nome do método
*/
var Carro  = function(nome,placa){
	this.placa = placa;
	this.nome = nome;
	this.fabricante = 'VW';
}

var fox = new Carro('Fox','AAA-111');
console.log('fox',fox);

var gol = new Carro('Gol','BBB-222');
console.log('gol',gol);

