/* 
   No Js todo número é do tipo number
   Padrao I3E754 problema padrão de falta de precisão
   
   var x = 0.3 - 0.2;
   console.log(x);


   No java o Double Primitivo também tem esse mesmo problema de precisão
   Cuidado com Cálculos utilizando o ponto flutuante
	
	CONTINUAR A PARTIR DE 4 MINUTOS 2.3

*/

var x = 0.3 - 0.2;
console.log(x);

/* 
	Para resolver o problema com relação ao padrão I3E754
	Eu multiplico tudo por 10 e depois divido

*/

var x = (0.3 * 10 - 0.2 *10 )/10;
console.log(x);


/*
	Convertendo o número 10 e colocando e base binária
*/

var x = 10;
console.log(" O Valor "+x + " em binário é: "+ x.toString(2)); //Converte o valor 10 em binário

console.log(" O Valor "+x + " em hexadecimal é: "+ x.toString(16)); //Converte o valor 10 em hexadecimal

/*Uma sugestão para descobrir as funções é olhar na documentação ou então executar o node e ao utilizar uma variável tipo a. usar o tab para verificar as opções para a*/

var preco=14.99;
console.log(" Arredonda o número para Cima "+preco.toFixed());


//Casos especiais do Tipo Number
//Qualquer número dividido por zero ele vai até o inifinito
var i = 10 / 0;
console.log(i); //Infinity e o tipo é infinito Infinity é do tipo number

var z=10 / 'Carlos Roberto';
console.log(z); //NaN = Ocorre ao dividir um valor por uma String

var z=10 / '2';
console.log(z); //Aqui funcionou pois ele converteu o texto em número e fez a ação

console.log(isNaN(z)); /* Para verificar se é Not a Number retorna o boolean*/




