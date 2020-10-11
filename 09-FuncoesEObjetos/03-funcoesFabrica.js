var criaCarroDaVolks = function(nome,placa){

	return {
		nome: nome,
		placa: placa,
		fabricante: 'VW'
	};

}

var fox = criaCarroDaVolks('Fox','AAA-111');
console.log('fox',fox);



var gol = criaCarroDaVolks('Gol','BBB-222');
console.log('gol',gol);