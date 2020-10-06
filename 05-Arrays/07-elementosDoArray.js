var acessorio = {
	som : 'Pioner',
	banco: 'Couro'
}

var ligar = function(a){
	console.log('Ligando o carro...',a);
}

var fox = ['Fox', 4, acessorio, ligar];

console.log(fox); //imprimindo o array
console.log(fox[2].som); //deu certo pois estou acessando o objeto na posição 2 que é um objeto
fox[3]('agora!'); //chameia a função ligar passando agora como parametro
console.log(fox[2]);//Imprimindo o objeto