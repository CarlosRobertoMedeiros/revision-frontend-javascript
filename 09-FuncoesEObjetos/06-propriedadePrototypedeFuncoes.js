//Usando Função Construtora
function Carro(nome,placa){
	this.nome = nome;
	this.placa = placa;
	//this.fabricante = 'VW';
}

Carro.prototype.fabricante = 'VW'; //Criando um atributo em um objeto
Carro.prototype.ligar = function(){
	console.log('Ligando o Carro');
};


var fox = new Carro('fox','AAA-1111');
console.log('fox',fox);

var gol = new Carro('gol','BBB-2222');
console.log('gol',gol);

//Verificando se ambos apontam para o mesmo protótipo
console.log(Object.getPrototypeOf(fox)===Object.getPrototypeOf(gol)); //true

console.log('fox.fabricante',fox.fabricante);
console.log('gol.fabricante',gol.fabricante);
fox.ligar(); //Ligando o Carro

