//Criando uma função para começar a entender

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus neque.'
			+' Cras sit amet ligula ut justo commodo porta id ut enim. Nulla est lectus, mollis sit amet vehicula id, volutpat eget mauris.';		

var toHackerCase = function (text){

	var hackerTextoArray = [];
	
	for (var i=0; i<texto.length;i++){
		
		if (texto.charAt(i)==='o'){
			hackerTextoArray.push(0);
		
		}else if(texto.charAt(i)==='l'){
			hackerTextoArray.push(1);
		
		}else if(texto.charAt(i)==='e'){
			hackerTextoArray.push(3);

		}else if(texto.charAt(i)==='a'){
			hackerTextoArray.push(4);

		}else if(texto.charAt(i)==='s'){
			hackerTextoArray.push(5);

		}else if(texto.charAt(i)==='t'){
			hackerTextoArray.push(7);

		}else{
			hackerTextoArray.push(texto.charAt(i));
		}
	}

	return hackerTextoArray.join("");
}

var toHackerCaseUsandoContinue = function (text){
	var hackerTextoArray = [];
	//O continue serve para que possa pular para a próxima iteração do laço
	//Assim não se faz necessário e else
	
	for (var i=0; i<texto.length;i++){
		
		if (texto.charAt(i)==='o'){
			hackerTextoArray.push(0);
			continue;
		}
		
		if(texto.charAt(i)==='l'){
			hackerTextoArray.push(1);
			continue;
		}
		
		if(texto.charAt(i)==='e'){
			hackerTextoArray.push(3);
			continue;
		}

		if(texto.charAt(i)==='a'){
			hackerTextoArray.push(4);
			continue;
		}

		if(texto.charAt(i)==='s'){
			hackerTextoArray.push(5);
			continue;
		}

		if(texto.charAt(i)==='t'){
			hackerTextoArray.push(7);
			continue;
		}

		hackerTextoArray.push(texto.charAt(i));

	}

	return hackerTextoArray.join("");
}


toHackerCaseUsandoSwitch = function(texto){

	var hackerTextoArray = [];
	//O break serve para que possa pular para a próxima iteração do laço
	//Assim não se faz necessário e else
	
	for (var i=0; i<texto.length;i++){
		
		switch(texto.charAt(i)){

			case 'o': 
				hackerTextoArray.push(0);
				break;
			case 'l': 
				hackerTextoArray.push(1);
				break;
			case 'e': 
				hackerTextoArray.push(3);
				break;
			case 'a': 
				hackerTextoArray.push(4);
				break;
			case 's': 
				hackerTextoArray.push(5);
				break;
			case 't': 
				hackerTextoArray.push(7);
				break;
			default: 
				hackerTextoArray.push(texto.charAt(i));
		}
	};

	return hackerTextoArray.join("");
}


toHackerCaseUsandoWhile = function(texto){

	var hackerTextoArray = [];
	//Utilizando o while
	var i=0;
	while (i<texto.length){
		
		switch(texto.charAt(i)){

			case 'o': 
				hackerTextoArray.push(0);
				break;
			case 'l': 
				hackerTextoArray.push(1);
				break;
			case 'e': 
				hackerTextoArray.push(3);
				break;
			case 'a': 
				hackerTextoArray.push(4);
				break;
			case 's': 
				hackerTextoArray.push(5);
				break;
			case 't': 
				hackerTextoArray.push(7);
				break;
			default: 
				hackerTextoArray.push(texto.charAt(i));
		}
		i++;
	};

	return hackerTextoArray.join("");
};

toHackerCaseUsandoWhileComTratamentoDeErro = function(texto){

	//0 NaN '' false null e undefined
	if (!texto) throw "Texto Inválido";

	var hackerTextoArray = [];
	//Utilizando o while
	var i=0;
	while (i<texto.length){
		
		switch(texto.charAt(i)){

			case 'o': 
				hackerTextoArray.push(0);
				break;
			case 'l': 
				hackerTextoArray.push(1);
				break;
			case 'e': 
				hackerTextoArray.push(3);
				break;
			case 'a': 
				hackerTextoArray.push(4);
				break;
			case 's': 
				hackerTextoArray.push(5);
				break;
			case 't': 
				hackerTextoArray.push(7);
				break;
			default: 
				hackerTextoArray.push(texto.charAt(i));
		}
		i++;
	};

	return hackerTextoArray.join("");
};



var HackerTextError = function(message){
	this.message = message;
	this.name = 'HackerTextError'
};


toHackerCaseUsandoWhileComTratamentoDeErroSendoAExcessaoUmObjeto = function(texto){

	//0 NaN '' false null e undefined
	if (!texto) throw new HackerTextError('Texto Inválido');
	if (typeof texto !=="string") throw new HackerTextError('Tipo Inválido');

	var hackerTextoArray = [];
	//Utilizando o while
	var i=0;
	while (i<texto.length){
		
		switch(texto.charAt(i)){

			case 'o': 
				hackerTextoArray.push(0);
				break;
			case 'l': 
				hackerTextoArray.push(1);
				break;
			case 'e': 
				hackerTextoArray.push(3);
				break;
			case 'a': 
				hackerTextoArray.push(4);
				break;
			case 's': 
				hackerTextoArray.push(5);
				break;
			case 't': 
				hackerTextoArray.push(7);
				break;
			default: 
				hackerTextoArray.push(texto.charAt(i));
		}
		i++;
	};

	return hackerTextoArray.join("");
};


console.log(toHackerCase(texto));
console.log(toHackerCaseUsandoContinue(texto));
console.log(toHackerCaseUsandoSwitch(texto));
console.log(toHackerCaseUsandoWhile(texto));


try{
	console.log(toHackerCaseUsandoWhileComTratamentoDeErro()); //Texto Inválido
}catch(e){
	console.log('Erro: '+ e);
}
console.log(toHackerCaseUsandoWhileComTratamentoDeErro(texto));


try{
	console.log(toHackerCaseUsandoWhileComTratamentoDeErroSendoAExcessaoUmObjeto()); //Texto Inválido
}catch(e){
	console.log('Erro: '+ e.name +' '+e.message);
}
console.log(toHackerCaseUsandoWhileComTratamentoDeErroSendoAExcessaoUmObjeto(texto));

