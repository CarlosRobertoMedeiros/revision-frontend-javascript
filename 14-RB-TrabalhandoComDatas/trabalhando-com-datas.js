/*
	Referência de estudo mdn
	link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

	link modelo RFC 2822: https://tools.ietf.org/html/rfc2822.html
	link modelo ISO8601 : resumo -> https://www.ionos.com/digitalguide/websites/web-development/iso-8601/

*/

/*
	Criando uma data a partir de uma função construtora,
	sem parâmetros
	Não existe uma forma literar para a criação
*/
console.log(new Date());//2020-10-16T19:56:20.014Z

var hoje = new Date();
console.log(hoje);  //2020-10-16T18:24:33.758Z

console.log(hoje.getTime());//1602872728027 tempo em milisegundos até hoje


var natal = new Date(1419472800000);
console.log('natal',natal); //2014-12-25T02:00:00.000Z

//O Cálculo de Datas leva em Consideração o UTC(GMT = Greenwitch mean time) +-00:00, também conhecido como Z, abreviação de ZuluTime
//Normalmente o modelo ZuluTime utiliza o ISO8601 e mostra as datas com Z

//Criação de Datas Uilizando Strings

/*
   Existem 2 modelos aceitos para data em js
   o RFC 2822 e o ISO8601 

*/
//Usando RFC 2822
var data = new Date();
console.log('dataAtual',data);//2020-10-16T20:04:07.272Z

//Usando o ISO8601
var data = new Date("2014-12-25");
console.log('dataIso8601',data);//2014-12-25T00:00:00.000Z

//Usando o ISO8601
var data = new Date("2014-12-25T10:00:00-02:00");
console.log('dataIso8601SemHoras',data);//2014-12-25T06:00:00.000Z

console.log(new Date(2014,11,25)); //2014-12-25T02:00:00.000Z 11 é um array ele é mês 12 de 0 a 11
console.log(new Date(2014,11,25,10,30,00)); //2014-12-25T12:30:00.000Z



/*
	Date API 

	getDate             - Retorna o dia
	getDay              - Retorna o dia da semana
	getFullYear         - Retorna o ano completo 4 dígitos
	getHours            - Retorna as horas 
	getMilliseconds     - Retorna os milisegundos
	getMinutes          - Retorna os minutos
	getMonth            - Retorna o mês [0 a 11]
	getSeconds          - Retorna os segundos
	getTime				- Retorna o tempo em milisegundos
	toString            - Retorna a data em String

*/

var natal = new Date(2014,11,25,10,30,0); //mês a partir de 0
console.log(natal.getYear());//114 ano com 2 digitos
console.log(natal.getFullYear());//2014 ano com 2 digitos
console.log(natal.getMonth());//11 é um array de 0 a 11
console.log(natal.getDay());//4 quarta feira  é o dia da semana de 0 a 6
console.log(natal.getDate());//o dia 25 informa correto






