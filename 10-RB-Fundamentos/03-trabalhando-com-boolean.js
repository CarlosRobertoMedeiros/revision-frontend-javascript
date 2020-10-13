var isento = true;
var estudante = false;


console.log(isento.toString());//true
console.log(estudante.valueOf());//false


/*
   Exceções
   Esses 6 valores sempre são falsos quando estão em uma posição boolean
   Todos os outros são true

*/
console.log(!!0);//false  Dupla negação eu estou afirmando alguma coisa
console.log(!!NaN);//false
console.log(!!'');//false
console.log(!!false);//false
console.log(!!null);//false
console.log(!!undefined);//false


var estudante = true;
if (estudante){
	console.log("Sim");
}

var nota=10;

if(nota){
	console.log('Dez');
}

var nome= 'Pedro';
if (nome){
	console.log('Pedro');
}

console.log(!!-1);//true pois não está contido nas exceções
console.log(!!10);//true pois não está contido nas exceções

var pessoa = {};
console.log(!!pessoa);//true pois não está contido nas exceções

var carros = [];
console.log(!!carros); //true pois não está contido nas exceções




