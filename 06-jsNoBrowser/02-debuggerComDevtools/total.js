console.log('Iniciando ...');

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');


valorElement.addEventListener('keyup',function(e){
	var total = 0;
	var valor = valorElement.value;


	if (valor < 10){
		total = valor + (valor *0.3) +5;
	}

	
	totalElement.innerHTML = total;

});


//Continuar a partir de 15 minutos desse video
