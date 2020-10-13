/*
	Exemplo Undefined
*/
var pessoa = {};
console.log(pessoa.idade);//undefined Consultando propriedade que não existe

pessoa.nome = 'Rodrigo';
pessoa.idade = 30;

console.log('Pessoa',pessoa);

//Fazendo um loop e pesquisando as propriedades de pessoa
for(var propriedade in pessoa){
	console.log(propriedade);
}

/*
	Sempre o undefined e null em tipos booleanos são falsos
*/



