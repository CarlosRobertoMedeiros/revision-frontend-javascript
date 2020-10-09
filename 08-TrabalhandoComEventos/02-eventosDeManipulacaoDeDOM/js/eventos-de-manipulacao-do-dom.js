$(function(){

	/*
		Podemos fazer on click utilizando seletores para poder manipular vários componentes juntos
		basta utilizar o jquery em uma classe
	 */

	/*On Click de botão*/
	$('#botao1').on('click',function(e){
		console.log('Botão 1 Clicado !!');

	});

	/*On Click do Link*/
	/*O Comportamento padrão do Link é realizado após o click do evento */
	/*Para Cancelar o comportamento padrão utilize o e.preventDefault */
	$('#link1').on('click', function(e){
		e.preventDefault();//Não executa o Comportamento Padrão
		console.log('Link 1 Clicado !!');		


	});

	/* Mostra o Código da tecla que está sendo digitada */
	$('#input1').on('keyup',function(e){
		console.log(e.keyCode);
		if (e.keyCode=== 13){
			alert('Enter pressionado !');
		}

	})

});

/* 
	Uma segunda Abordagem não muito recomendada, porém mistura o código no html
	usando html + js. Utilizando o padrão jQuery ele é crossbrowser e facilita a utilização

*/
function botao2Clicado(){
	console.log('Botão 2 Clicado !');
}