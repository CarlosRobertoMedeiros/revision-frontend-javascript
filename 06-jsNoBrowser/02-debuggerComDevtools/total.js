console.log('Iniciando ...');

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');


valorElement.addEventListener('keyup',function(e){
	var total = 0;
	var valor = parseFloat(valorElement.value ? valorElement.value : 0); //Convertendo a String em Número, ficar atento ao valor zerado


	if (valor>0  && valor<10){
		total = valor + valor *0.3 + 5;
	}else if(valor>=10 && valor<=50){
		total = valor + valor *0.1 + 2;
	}else{
		total =valor;
	}

	
	totalElement.innerHTML = total;

});


//Continuar a partir de 15 minutos desse video
