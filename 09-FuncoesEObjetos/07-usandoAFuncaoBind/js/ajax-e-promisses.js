/*
	Usando o Module Pattern
*/

var estados = (function(){
	var comboEstado = $('#combo-estado');//Privada Devido ao Module Pattern

	function iniciar(){

		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
		});	

	}

	function onEstadosRetornados(estados){

		comboEstado.html('<option>Selecione o estado</option>');

		estados.forEach(function(estado){
		
			var optionalEstado 	= $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionalEstado); //append insere na ultima posição prepend insere na primeira posição
		});

	}

	function onError(){
		alert('Erro ao carregar os estados do servidor');
	}


	return {
		iniciar: iniciar
	}


})();

estados.iniciar();