/*Link do ajax para jquery
	https://api.jquery.com/jQuery.ajax/
*/

$(function(){

	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp',
	});

	resposta.done(function(estados){
		
		var comboEstado = $('#combo-estado');
		//comboEstado.empty();
		comboEstado.html('<option>Selecione o estado</option>');


		estados.forEach(function(estado){
			
			var optionalEstado 	= $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionalEstado); //append insere na ultima posição prepend insere na primeira posição
		});

	})

	resposta.fail(function(){
		alert('Erro ao carregar os estados do servidor');
	})

});

