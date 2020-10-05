//Comparando Objetos
var joao = {
	nome:'João',
	idade:25,
	email:'teste@gmail.com',
	igualA: function (obj){
		return this.email === obj.email;
	}
}

var maria = {
	nome:'Maria',
	idade:22,
	email:'teste@gmail.com'
}


console.log(joao===maria);//false

//Como ensinar a Comparacao de acordo com a função igualA
console.log('João e Maria tem  os mesmos emails?', joao.igualA(maria));//true

//Posso duplicar o código, porém tem outras maneiras.



