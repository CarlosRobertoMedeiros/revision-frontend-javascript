/*
	Variáveis e Hoisting

   O Hoisting leva pra cima todas as variáveis que ele encontrar independente da ordem de execução
   Ex. o javascript levou todos os var para cima mesmo o var valor
   	   Um detalhe importante ele leva apenas a declaração da variável e não o valor
   	   Caso ocorra o envio de uma variável com valor no final o Js vai informar um NaN
	
	O js é Case Sensitive
*/
var percentualImposto = 0.15;
valor = 100;
var totalImposto = valor * percentualImposto;

console.log('Total de Imposto a pagar', totalImposto);


var valor;
//var valor=100; //Da erro mais vai informar NaN



