var pessoa='FISICA';

if (pessoa==='FISICA'){
	//Defini máscara de CPF
	console.log("Selecionado Pessoa Física");
}else if (pessoa==='JURIDICA'){
	//Máscara de CNPJ
	console.log("Selecionado Pessoa Jurídica");
}else{
	console.log("Tipo Pessoa Inválido");
}

var valor = 0;

if (!!valor){
	console.log("valor deve ser maior que 0");
}

var idade = 10;

if(idade){
	console.log("Daqui a 5 anos você terá ", idade+5 ,"anos.");
}



