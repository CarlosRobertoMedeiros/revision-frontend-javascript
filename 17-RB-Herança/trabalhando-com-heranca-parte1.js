/*
	Conversando sobre protótipos usando __proto__
	A propriedade __proto__ é uma 
	referência para o protótipo do objeto.
*/


var homem = {
	sexo:'Masculino'
};

var joao = {
	nome:'João',
	idade:20,
	__proto__:homem
};

var pedro = {
	nome:'Pedro',
	idade:18,
	__proto__:homem
};


console.log(joao); //{ nome: 'João', idade: 20 }
console.log(joao.sexo); //{ nome: 'João', idade: 20 }
console.log(pedro);//{ nome: 'Pedro', idade: 18 }
console.log(pedro.sexo); //{ nome: 'João', idade: 20 }

/*
	__proto__ não é padrão e pode não funcionar em alguns interpretadores

	Prefira a utilização de Object.getPrototypeOf e Object.setPrototypeOf
	para interagir com o protótipo do objeto.
*/

var homem = {
	sexo:'Masculino'
};

var joao = {
	nome:'João',
	idade:20
};

var pedro = {
	nome:'Pedro',
	idade:18
};

Object.setPrototypeOf(joao,homem);
Object.setPrototypeOf(pedro,homem);

console.log(joao); //{ nome: 'João', idade: 20 }
console.log(joao.sexo); //Masculino
console.log(pedro);//{ nome: 'Pedro', idade: 18 }
console.log(pedro.sexo); //Masculino

/*
	Também é possível utilizar o Object.create para
	determinar o protótipo do objeto
*/
var homem = {
	sexo:'Masculino'
};

var joao = Object.create(homem);
joao.nome ='João';
joao.idade = 20;
console.log(joao);//{ nome: 'João', idade: 20 }
console.log(joao.sexo);//Masculino

//Shadowing
//Consultei a propriedade sexo no objeto joao, não tem, então procuro no objeto homem,  não tem, então procuro em Object.prototype caso não tenha devolvo undefined
//Caso eu encontre a propriedade eu não preciso ir nos protótipos

var homem = {
	sexo:'Masculino'
};

var joao = Object.create(homem);
joao.nome ='João';
joao.idade = 20;
console.log(joao);//{ nome: 'João', idade: 20 }
console.log(joao.sexo);//Masculino
console.log(Object.keys(joao));//[ 'nome', 'idade' ]  retorna um array com o nome das propriedades

//Usando o For in ele também pesquisa as propriedades dos protótipos nome,idade,sexo
for(var propriedade in joao){
	// if (!joao.hasOwnProperty(propriedade)) continue; //Lista apenas as propriedades de joão, caso proteja
	console.log(propriedade);
}







