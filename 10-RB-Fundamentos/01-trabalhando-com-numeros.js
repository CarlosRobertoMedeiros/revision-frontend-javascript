var nota = 10;
console.log(nota.toFixed(2));//10.00
console.log(nota.toExponential(2));//1.00e+1
console.log(nota.toPrecision(1));//1e+1
console.log(nota.toString());//10
console.log(nota.valueOf());//10


/* Exceções ao Utilizar números */
console.log(0.1+0.2); //0.30000000000000004
console.log(3/0); //Infinity
console.log("Carlos"*10);//NaN


/* 
	Utilizando a API Math API
	Muito Similar a Classe Math da Linguagem Java


	- abs    -> Valor Absoluto do número
	- floor  -> Valor Inteiro do número 
	- log    -> Logarítmo Natural do Número(base E)
	- min    -> Retorna o menor número
	- max	 -> Retorna o maior número
	- pow    -> Potência do número
	- random -> Gera um número Randômico
	- round  -> Arredonda o número para o Inteiro mais próximo
	- sin    -> Seno do número
	- sqrt   -> Raíz quadrada do número
	- tan    -> Tangente do número
*/

console.log('floor =>',Math.floor(nota));//10
console.log('coseno =>',Math.cos(1));//0.5403023058681398
console.log('seno =>',Math.sin(1));//0.8414709848078965

