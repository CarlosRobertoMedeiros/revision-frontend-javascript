function Carro(nome,placa){
	this.nome = nome;
	this.placa = placa;
}

//Usando método Construtor
var voyage = new Carro('voyage','CCC-3333');
console.log('voyage',voyage);

//Usando Call
var fox = {};
Carro.call(fox, 'Fox','AAA-1111');
console.log('fox',fox);

//Usando Apply
var gol = {};
Carro.apply(gol, ['Gol','BBB-2222']);
console.log('gol',gol);

