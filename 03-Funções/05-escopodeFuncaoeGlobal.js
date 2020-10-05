//Toda variável declarada fora de uma função ela pertence ao escopo global
var nome='Carlos Roberto'; //Variável em escopo global

var capitalizar = function(){
	var nome = 'Carlos Roberto'.toUpperCase(); //Variável local à função capitalizar
}

capitalizar();
console.log('nome',nome);//Carlos Roberto //Retornou quem foi Global


var capitalizar2 = function(){
	nome = 'Carlos Roberto'.toUpperCase(); //Variável local à função capitalizar
}

capitalizar2();
console.log('nome2',nome);//CARLOS ROBERTO // Estou acessando a variável nome global dentro de uma função