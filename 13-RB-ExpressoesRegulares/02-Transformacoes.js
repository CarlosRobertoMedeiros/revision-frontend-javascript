/*
	Nosso primeiro exemplo envolve o reconhecimento de 
	um telefone simples: 9999-9999. Esse telefone será
	evoluído por meio de novos cenários para estimular a
	utilização de grupos, metacaracteres, quantificadores e 
	muito mais!
*/

/*
  Meta Caracteres
  \ Usado Para escapar um valor literal
	  ^ Inicia com um determinado caractere
	  $ Finaliza com um determinado caractere

  Grupos de Caracteres
	  [abc]  - aceita qualquer caractere dentro do grupo, nesse caso a,b e c
	  [^abc] - não aceita qualquer caractere dentro do grupo, nesse caso a,b e c
	  [0-9]  - aceita qualquer caractere entre 0 e 9
	  [^0-9] - não aceita qualquer caractere entre 0 e 9

  Quantificadores 
	  {n}   - Quantifica um número específico
	  {n,}  - Quantifica um número mínimo
	  {n,m} - Quantifica um número mínimo e um máximo

	  ?   - Zero ou um
	  *   - Zero ou mais
	  +   - Um ou mais

   Meta Caracteres Gerais
    
     .    - Representa qualquer caractere
     \w	  - Representa o conjunto [a-zA-Z0-9_]
     \W	  - Representa o conjunto [^a-zA-Z0-9_]
     \d	  - Representa o conjunto [0-9]
     \D	  - Representa o conjunto [^0-9]
     \s	  - Representa um espaço em branco
     \S	  - Representa um não espaço em branco
     \n   - Representa uma quebra de linha
     \t   - Representa um tab

   Modificadores (Essa parte uso em JS)
	
	 i - Case-insensitive matching
	 g - Global matching
	 m - Multiline matching  

*/


var regExp = /9999-9999/;
var telefone = "9999-9999";

//Encontrou no índice 0 dado o input 9999-9999 a partir do índice 0
console.log(regExp.exec(telefone));//[ '9999-9999', index: 0, input: '9999-9999', groups: undefined ]
console.log(regExp.test(telefone));//true


//Passo 02 - O telefone agora tem código de Área (48)9999-9999
var regExp = /\(48\)9999-9999/; //Usando para escapar uma barra invertida \
var telefone = "(48)9999-9999";

console.log(regExp.exec(telefone));//[ '9999-9999', index: 0, input: '9999-9999', groups: undefined ]
console.log(regExp.test(telefone));//true

//Passo 03 - Fazer com que o telefone seja reconhecido únicamente, não permitindo outros caracteres antes e depois
var regExp = /^\(48\)9999-9999$/; //Usando para escapar uma barra invertida \
var telefone = "(48)9999-9999";

console.log(regExp.exec(telefone));//[ '9999-9999', index: 0, input: '9999-9999', groups: undefined ]
console.log(regExp.test(telefone));//true

//Passo 04 - Chegou a hora de aceitar qualquer número Utilizando Conjunto de Caracteres
var regExp = /^\([0-9][0-9]\)[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/; 
var telefone = "(88)9999-8888";

console.log(regExp.test(telefone));//true

//Passo 05 - Quantificadores - Parte 1
var regExp = /^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/; 
var telefone = "(88)9999-8888";

console.log(regExp.test(telefone));//true

//Passo 06 - Alguns estados tem mais dígitos no telefone, como fazer?{4,5}
var regExp = /^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/; 
var telefone1 = "(88)9999-8888";
var telefone2 = "(88)99999-8888";

console.log(regExp.test(telefone1));//true
console.log(regExp.test(telefone2));//true

//Passo 07 - E se o hifen for opcional?   ? é opcional
var regExp = /^\([0-9]{2}\)[0-9]{4,5}-?[0-9]{4}$/; 
var telefone1 = "(88)9999-8888";
var telefone2 = "(88)99998888";

console.log(regExp.test(telefone1));//true
console.log(regExp.test(telefone2));//true

//Passo 08 - E se o telefone estiver em uma estrutura de tabela, como reconhecer cada linha? (<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+ o mais é uma ou mais vezes
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));//true

//Passo 09 - Em muitos casos, é possível substituir os grupos por metacaracteres específicos!
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));//true

/*
	String API

	match   - Executa uma busca na String e retorna um array contendo os dados encontrados, ou null
	split   - Divide a String com base em uma outra String fixa ou expressão regular
	replace - Substitui partes da String com base em uma outra String fixa ou expressão regular 

*/

//Passo 10 - Extrair o primeiro telefone da linhas da Tabela
var regExp = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/;

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp));//true

//Passo 11 - Extrair o telefone de todas as linhas da Tabela utilizando a maneira global
var regExp = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/g;

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";

telefones = [];
telefones = telefone.match(regExp);
//console.log(telefone.match(regExp));//true
console.log('telefones',telefones);//[ '(80) 999778899', '(90) 99897-8877', '(70) 98767-9999' ]



//Passo 12 - Vou localizar todos os número e substituir pela String telefone
var regExp = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/g;

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.replace(regExp, "telefone"));//true