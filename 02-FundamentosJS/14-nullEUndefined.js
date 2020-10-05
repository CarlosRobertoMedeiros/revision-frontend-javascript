/*
	Trabalhando com Null e Undefined
*/

var x;
console.log(x);//undefined

//Uma comparação Interessante é null com undefined
console.log(null === undefined);//false   comparo um object com um undefined  como os tipos são diferentes ele retorna false

//Uma comparação Interessante é null com undefined
console.log(null == undefined) //true o javascript converte internamente como ambos representam a mesma coisa ausência de valor eles são iguais

var x = null;
var y = undefined;

console.log(x==null);//true
console.log(x==undefined);//true

console.log(y==null);//true
console.log(y==undefined);//true

//Regra simples
//Usar um valor curto para comparar se ele é diferente de null ou undefined
//Aqui só compara valores e não tipos
if (x != null){
	console.log('Existe um valor em x', x);
}else{
	console.log('X não tem um valor util');
}