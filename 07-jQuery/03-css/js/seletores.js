/*Ready só funciona ao Carregar 100% da DOM
Link: https://api.jquery.com/ready/
 $() => Indica o Ready da Jquery*/
$(function(){
	/*Para Seleção do JQuery $('#id')*/
	let selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	let selecaoUsuarios = $('.js-selecao-usuario');

	
	function estilizarLinhasUsuarios(){
		
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');

	}


	selecaoUsuarios.on('click', function(){

		let totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		let checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked',checked);

	});

	selecaoTodosUsuarios.on('click', function(){
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));	

		/*if (selecaoTodosUsuarios.prop('checked')){
			selecaoUsuarios.parents('tr').addClass('selecionado')
		}else{
			selecaoUsuarios.parents('tr').removeClass('selecionado')
		}*/
		estilizarLinhasUsuarios();

	})


	selecaoUsuarios.on('change',function(event){
		/*var selecaoUsuario = $(event.target); //$ com isso eu retorno um objeto do jQuery
		
		if (selecaoUsuario.prop('checked')){
			selecaoUsuario.parents('tr').addClass('selecionado');  //procura nos pais até o primeiro tr	
		}else{
			selecaoUsuario.parents('tr').removeClass('selecionado');  //procura nos pais até o primeiro tr	

		}*/
		estilizarLinhasUsuarios();

	})



});