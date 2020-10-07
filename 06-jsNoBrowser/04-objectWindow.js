/*
	Objeto window
		Esse objeto sempre é carregado automaticamente, o objeto windows tem várias funções
		por exemplo o parseFloat está na biblioteca window

	e 

	Escopo Global
		Quando estiver em um escopo global, lembrar que o window sempre carregar as variáveis de js que vem de maneira global
		Ou seja, caso eu tenha outros arquivos .js com o mesmo nome de variavel vou ter problemas


		Ex.
			var nome = 'Joao' // Por estar solta vai estar no window
			se eu chamar window.nome vai mostrar 'João'

			Para Proteger faça assim

			function teste(){
				var nome2 = 'João';
			}

			por estar dentro de uma função o objeto window não consegue enxergar //Encapsulamento Simples
	
*/