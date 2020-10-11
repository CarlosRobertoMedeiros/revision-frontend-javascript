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

// - O Shadowing faz a pesquisa como se fosse um princípio de herança
// mostra a classe direta e depois pesquisa na classe pai.
// - Porém ao utilizar o imprimir do objeto direto ele não mostra os atributos referentes ao pai, mesmo sabendo que existem

//Continuar 9.2 a Partir dos 2 minutos

//Nesse for in verificou-se que os atributos informados no forEach tem como 
//pai o fox
for (atributos in fox){
	console.log(atributos,fox.hasOwnProperty(atributos));
}