/*
	Usando o Module Pattern Misturado com Função Construtora
	Preciso sempre fazer o bind para trazer o this corretamente e não de outro objeto
	Sempre ir trocando os contextos dos objetos this usando o bind
*/

var Estado = (function(){
	
	function Estado(){
		this.comboEstado = $('#combo-estado');//Privada Devido ao Module Pattern

	}

	Estado.prototype.iniciar = function(){
		console.log('this no prototype',this);
		$.ajax({
				url: 'http://localhost:8080/estados',
				method: 'GET',
				dataType: 'jsonp',
				success: onEstadosRetornados.bind(this),
				error: onError
			});	
	}

	function onEstadosRetornados(estados){
		console.log('this',this);
		this.comboEstado.html('<option>Selecione o estado</option>');

		estados.forEach(function(estado){
			console.log('this no forEach',this);
			var optionalEstado 	= $('<option>').val(estado.uf).text(estado.nome);
			this.comboEstado.append(optionalEstado); //append insere na ultima posição prepend insere na primeira posição
		}.bind(this));

	}

	function onError(){
		alert('Erro ao carregar os estados do servidor');
	}


	return Estado;


})();

$(function(){
	var estado = new Estado();
	estado.iniciar();


	//var cidades = new Cidade(estado)	

});

