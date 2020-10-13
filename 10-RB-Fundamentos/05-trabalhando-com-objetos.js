//Criando um Objeto
var pessoa = {};//Criei um objeto vazio
console.log(typeof(pessoa));//object

var pessoa = {
	nome:'Pedro Silva',
	idade:22,
	telefone:null,
	endereco:{
		logradouro:'Av. Brasil',
		numero:70,
		bairro:'Centro'
	}
};

console.log(typeof(pessoa));//object
console.log(pessoa);

//Modificando Valores Como Se fosse um Setter
pessoa.nome = 'João';
console.log(pessoa); //Quando sabe a propriedade

pessoa['nome'] = 'Ricardo'; //Descobrindo dinamicamente ou no forEacn por exemplo
console.log(pessoa);

pessoa.telefone = '9999-9999';
console.log(pessoa);

pessoa['cor dos olhos']='azul';
console.log(pessoa);

pessoa.endereco.bairro = "Centro 2";
console.log(pessoa);

//Apagando propriedades do objeto
delete pessoa.idade;
console.log(pessoa);

for (var propriedade in pessoa){
	console.log(propriedade+' '+pessoa[propriedade]);
}







