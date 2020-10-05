//Criando Objeto
var fox = {
	cor:'prata',
	modelo:'Fox',
	fabricante: 'VW'
};

console.log('fox',fox);
console.log(typeof(fox));

//Acessando propriedade
console.log('Cor do Fox =>', fox.cor);

//Alterando propriedade
fox.cor = 'Branco';
console.log('Cor do Fox =>', fox.cor);

//Outra Forma de consultar a Propriedade
//ela é mais dinâmica e vem através de String
console.log('modelo',fox['modelo']);


//Adicionando nova propriedade no objeto
fox.peso = 1100;
console.log(fox);

//Não existe a propriedade e estou lendo
//retorna Undefined
console.log('Potência ',fox.motor)

//Definindo funções dentro de um objeto
fox.ligar = function(){
	console.log('ligando o carro!');
}
console.log(fox);

//chamando a função
fox.ligar();



//Criando outro Objeto
var celta = {
	cor: 'branco',
	modelo: 'celta',
	fabricante:'GM',
	ligar: function (){
		console.log('Ligando o celtinha');
	}

}

console.log('celta',celta);




