//Possibilidades de Criar um Array
//1. Cria um array vazio
var carros = []; 
carros[0]="Ka";
carros[1]="Corsa";
carros[2]="Palio";
console.log(carros);

//2.Criando um Array Inline
var carros = ["Ka","Corsa","Palio"];  //Passando elementos de forma inline
console.log(carros);

//3.Criando um Array Inline utilizando o new Array
var carros = new Array("Ka","Corsa","Palio");
console.log(carros);

//4.Criando um new Array com tamanho Inicial para começar
//Se eu quiser criar um carro na posição 20 eu posso pois o array continua
var carros = new Array(10);
console.log(carros);//[ <10 empty items> ]

/* 
	Utilizando a API de Arrays

concat 			- Junta dois arrays, retornando a cópia dos dois
every			- Retorna true se todos os elementos atenderem a função
filter			- Filtra o array com base em uma função de filtro
forEach			- Percorre o array, invocando uma função para cada elemento
indexOf 		- Retorna o índice do primeiro elemento encontrado
join 			- Cria uma String customizada com todos os elementos do array
lastIndexOf     - Retorna o índice do ultimo elemento encontrado
map  			- Transforma os elementos de um array
pop				- Remove o ultimo elemento do array, retornando-o
push			- Adiciona um elemento no array, retornando o length
reduce	   		- Acumula os elementos de um array
reverse			- Inverte a ordem dos elementos de um array
shift			- Remove o primeiro elemento do array retornando-o
some			- Retorna true se um dos elementos atender a função
slice 			- Seleciona uma parte do array, retornando-a
sort 			- Ordena os elementos de um array com base em uma função
splice 			- Adiciona ou remove elementos de uma posição específica
toString 		- Converte o Array em uma String 
unshift 		- Adiciona elementos no início de um array
valueOf 		- Retorna o próprio Array

*/

//Monta o Array
var carros = ["Ka","Corsa","Palio"]; 
console.log(carros.valueOf()); //[ 'Ka', 'Corsa', 'Palio' ] Retorna o Array
console.log(carros.toString());//Ka,Corsa,Palio Retorna os valores do Array em String
console.log(carros.length);//3 Consulta o tamanho do Array

//Testando manipulações de Array
var carros = ["Ka","Corsa","Palio"]; 
console.log(carros.push("Gol"));//4 Adicionando elementos no final do Array
console.log(carros.toString());//Ka,Corsa,Palio,Gol Retorna os valores do Array em String
console.log(carros.pop());//4 Removendo elementos no final do Array Exemplo Pilha
console.log(carros.toString());//Ka,Corsa,Palio Retorna os valores do Array em String
console.log(carros.unshift("Gol"));//4 Adicionando elementos no Início do Array
console.log(carros.toString());//Gol,Ka,Corsa,Palio Retorna os valores do Array em String
console.log(carros.shift());//4 Remove elementos no Início do Array
console.log(carros.toString());//Ka,Corsa,Palio Retorna os valores do Array em String


//Monta o Array
var carros = ["Ka","Corsa","Palio"]; 

//Testando outras manipulações de Array
console.log(carros.indexOf('Corsa'));//1 Retorna o índice do array que retorna do dado


/*
	O Splice é o Canivete Suiço
	Ele remove, altera e adiciona

*/
//Remoção de Elementos em uma posição específica
var pos = carros.indexOf('Corsa');//1
console.log(carros.splice(pos,1));//["Corsa"] Remove o item da variável pos o 1 quer dizer quantos eu quero remover a partir daquela posição
console.log(carros.toString());//Ka,Palio

//Substituição de Elementos em uma posição específica
//Monta o Array
var carros = ["Ka","Corsa","Palio"]; 
var pos = carros.indexOf('Corsa');//1
console.log(carros.splice(pos,1,'Sonic'));//["Corsa"] Substitui o item da variável pos o 1 quer dizer quantos eu quero alterar e por quem
console.log(carros.toString());//Ka,Sonic,Palio

//Adição de Elementos em uma posição específica
//Monta o Array
var carros = ["Ka","Sonic","Palio"]; 
var pos = carros.indexOf('Sonic');//1
console.log(carros.splice(pos,0,'Corsa'));//["Corsa"] Adiciona o item da variável pos o 0 quer dizer quantos eu quero alterar e quem insiro nesse caso
console.log(carros.toString());//Ka,Corsa,Sonic,Palio

//Listando os Elementos
//Monta o Array
var carros = ["Ka","Corsa","Sonic","Palio"]; 

//Usando Lambda
//Resultado
	//Ka
	//Corsa
	//Sonic
	//Palio
carros.forEach(function(elemento){
	console.log(elemento); 
});

//Trabalhando com Filtros em Arrays

//Criando um Array
var carros = [
	{marca:'Ford',modelo:'Ka'},
	{marca:'Chevrolet',modelo:'Corsa'},
	{marca:'Fiat',modelo:'Palio'}
];

//Muito Útil Testando a Operação Filter
var carrosFord = carros.filter(function(elemento){
	return elemento.marca === 'Ford';
});
console.log(carrosFord);//[ { marca: 'Ford', modelo: 'Ka' } ]

//Testando os elementos do Array com every(Todos são)
var todosCarrosSaoDaFord =  carros.every(function(elemento){
	return elemento.marca === 'Ford';
})
console.log(todosCarrosSaoDaFord);//false

//Testando os elementos do Array com some(algum é)
var algumCarroDaFord =  carros.some(function(elemento){
	return elemento.marca === 'Ford';
})
console.log(algumCarroDaFord);//true


//Mapeando os Elementos de Array com Map

//Criando um Array
var carros = [
	{marca:'Ford',modelo:'Ka'},
	{marca:'Chevrolet',modelo:'Corsa'},
	{marca:'Fiat',modelo:'Palio'}
];

//Essa função "cria ou deriva" um novo array retornando o filtro explicitado
var marcaDeCarros = carros.map(function(elemento){
	return elemento.marca;
});
console.log(marcaDeCarros);//[ 'Ford', 'Chevrolet', 'Fiat' ]

var tamanhoDasStringsDoModeloDeMarcas =  carros.map(function(elemento){
	return elemento.modelo.length;
})
console.log(tamanhoDasStringsDoModeloDeMarcas);//[2,5,5]


//Processando os Elementos do Array com Reduce
//Criando um Array
var carros = [
	{marca:'Ford',modelo:'Ka', preco: 28800},
	{marca:'Chevrolet',modelo:'Corsa', preco: 34750},
	{marca:'Fiat',modelo:'Palio', preco: 32000}
];

//Faz um processamento e uma acumulação
//O segundo parâmetro da função é o "0", ou seja quer dizer que começa em 0
var valorTotalDosCarros = carros.reduce(function(elementoAnterior,elementoAtual){
	return elementoAnterior+elementoAtual.preco;
},0);
console.log(valorTotalDosCarros);//95550


//Utilizando uma nova operação chamada concat
//Ele concatena dos arrays
var motos = ['Honda','Yamaha'];
var carros = ['Ford','Chevrolet','Fiat'];
var veiculos = carros.concat(motos);
console.log(veiculos);//[ 'Ford', 'Chevrolet', 'Fiat', 'Honda', 'Yamaha' ]


//Utilizando o Slice = Fatia um array com Slice
var carros = ['Ka','Corsa','Palio', 'Gol'];
console.log(carros.slice(0,2));//[ 'Ka', 'Corsa' ]  coloca os índices de 0 e 1
console.log(carros.slice(1,3));//[ 'Corsa', 'Palio' ] coloca os índices de 1 e 2
console.log(carros.slice(2));//[ 'Palio', 'Gol' ]  pesquisa do índice 2 ao final

//Invertendo a Ordem de um Array com Reverse Esse código modifica a orde do array original
var carros = ['Ka','Corsa','Palio', 'Gol'];
console.log(carros.reverse());//[ 'Gol', 'Palio', 'Corsa', 'Ka' ]

//Exemplos de Utilização do Sort
// Para ordernar por preço em ordem ascendente
var carros = [
	{marca:'Ford',modelo:'Ka', preco: 28800},
	{marca:'Chevrolet',modelo:'Corsa', preco: 34750},
	{marca:'Fiat',modelo:'Palio', preco: 32000}
];
var carrosOrdenadosPorPreco =  carros.sort(function(a,b){
	return a.preco - b.preco; //ordem ascendente
	//return b.preco - a.preco; //ordem descendente
})
console.log(carrosOrdenadosPorPreco);


//Juntando os elementos de um array com join
//Retorna uma lista de String com o valor utilizado com join
var carros = ['Ka','Corsa','Palio', 'Gol'];
console.log(carros.join(';'))//Ka;Corsa;Palio;Gol seria o inverso do split

console.log(carros.join(';').split(';'))// [ 'Ka', 'Corsa', 'Palio', 'Gol' ] retorna o array novamente

//Exemplo Aleatório Para Repetir uma String 9 vezes
console.log("Javascript" * 10);//NaN
console.log(new Array(10).join("Javascript"));//JavascriptJavascriptJavascriptJavascriptJavascriptJavascriptJavascriptJavascriptJavascript






























































