$(function(){

	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e){

		var keyCode = e.keyCode;

		if (keyCode === 13){
			// Disparar o Evento "Importante Chamada Assíncrona"
			atividade.trigger('enter',atividade.val());
			atividade.val('');

		}


	});


	//Método disparado de maneira assincrona
	atividade.on('enter', function(evento,texto){
		listaAtividades.prepend('<li>'+ texto +'</li>');

	})

	//Método disparado de maneira assincrona
	atividade.on('enter', function(evento,texto){
		console.log('Outra funcionalidade aqui !');

	})



});