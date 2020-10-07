/*Ready só funciona ao Carregar 100% da DOM
Link: https://api.jquery.com/ready/
 $() => Indica o Ready da Jquery*/
$(function(){
	/*Para Seleção do JQuery $('#id')*/
	let selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	let selecaoUsuarios = $('.js-selecao-usuario');

	selecaoUsuarios.on('click', function(){

		let totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		let checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked',checked);

	});

	selecaoTodosUsuarios.on('click', function(){
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));		
	})
});