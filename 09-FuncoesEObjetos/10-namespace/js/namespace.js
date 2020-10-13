/*
	Criando um objeto para setar o namespace e manter 
	o projeto organizado 
*/
var ProjetoEstudos = {};

//Criando o Estado
ProjetoEstudos.Estado = (function(){
	
	function Estado(){
		this.comboEstado = $('#combo-estado');//Privada Devido ao Module Pattern
		
		this.emitter = $({});//objeto jQuery Vazio
		this.on = this.emitter.on.bind(this.emitter);

	}

	Estado.prototype.iniciar = function(){
		//console.log('this no prototype',this);
		$.ajax({
				url: 'http://localhost:8080/estados',
				method: 'GET',
				dataType: 'jsonp',
				success: onEstadosRetornados.bind(this),
				error: onError
			});	

		this.comboEstado.on('change',onEstadoAlterado.bind(this));
	}

	function onEstadoAlterado(){
		this.emitter.trigger('alterado',this.comboEstado.val());
	}

	function onEstadosRetornados(estados){
		//console.log('this',this);
		this.comboEstado.html('<option value="">Selecione o estado</option>');

		estados.forEach(function(estado){
			//console.log('this no forEach',this);
			var optionalEstado 	= $('<option>').val(estado.uf).text(estado.nome);
			this.comboEstado.append(optionalEstado); //append insere na ultima posição prepend insere na primeira posição
		}.bind(this));

	}

	function onError(){
		alert('Erro ao carregar os estados do servidor');
	}


	return Estado;


})();

//Criando a Cidade
ProjetoEstudos.Cidade = (function(){

	function Cidade(estado){
		this.comboCidade = $('#combo-cidade');
		this.estado = estado;

	}

	Cidade.prototype.iniciar = function(){
		//atachar quando o estado for alterado
		//Evento Customizado
		this.estado.on('alterado', onEstadoSelecionado.bind(this));
	}

	function onEstadoSelecionado(evento,uf){
		//console.log('this',this);

		if (uf){
			$.ajax({
				url: 'http://localhost:8080/cidades',
				method: 'GET',
				dataType: 'jsonp',
				data: {
					uf: uf
				},
				success: onCidadesRetornadas.bind(this),
				error: onError
			});
		}else{
			reset.call(this); //tanto como apply	
		}
	}

	function reset(){
		//console.log('this',this)
		this.comboCidade.html('');
		this.comboCidade.attr('disabled','disabled');
	}


	function onCidadesRetornadas(cidades){
		this.comboCidade.removeAttr('disabled');
		this.comboCidade.html('<option>Selecione a cidade</option>');
		cidades.forEach(function(cidade){
			var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
			this.comboCidade.append(optionCidade);

		}.bind(this));


	}

	function onError(){
		alert('Erro ao carregar os estados do servidor');	
	}
		
	return Cidade;

})();


//Chamando os Métodos
$(function(){
	var estado = new ProjetoEstudos.Estado();
	estado.iniciar();


	var cidade = new ProjetoEstudos.Cidade(estado)	
	cidade.iniciar();

});

