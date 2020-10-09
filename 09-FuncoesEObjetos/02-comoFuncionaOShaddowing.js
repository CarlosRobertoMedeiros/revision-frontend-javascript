var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111'
}

console.log('fox.fabricante',fox.fabricante); //undefined
Object.setPrototypeOf(fox,volks); //Passa o a referencia de Prototype para volks
console.log('fox.fabricante:',fox.fabricante);//VW

//Continuar 9.2 a Partir dos 2 minutos