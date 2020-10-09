/*
	HERANÇA

	Em JavaScript um objeto sempre extende de Object.prototype
	Não existe to String de filho pegando os dados do pai em JS

*/
var volks = {
	fabricante: 'VW'
}

var fox = {
	nome:'Fox',
	placa: 'AAA-111'
}

/*var gol = {
	nome:'Gol',
	placa: 'BBB-222'
}
*/
/*Segunda Alternativa de Criação de Objeto

var gol = Object.create(volks);
gol.nome='Gol';
gol.placa='BBB-222';
*/

/*
Terceira Alternativa
*/
var gol = {
	nome:'Gol',
	placa: 'BBB-222',
	__proto__:volks	//Não recomendado
}

console.log('fox',fox);
console.log('gol',gol);

console.log(Object.getPrototypeOf(fox)); //{} retorna um objeto vazio
console.log(Object.getPrototypeOf(fox)===Object.getPrototypeOf(gol)); //true retorna a mesma origem de ambos, pois são iguais descendem de Object.prototype

console.log(fox.fabricante);//undefined
console.log(gol.fabricante);//undefined


//Forma 1 de associação
//Object.setPrototypeOf(fox,volks);
//Object.setPrototypeOf(gol,volks);

console.log(fox.fabricante);//VW
console.log(gol.fabricante);//VW




