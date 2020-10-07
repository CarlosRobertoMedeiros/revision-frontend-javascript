/*
	Devo Usar CDN ou arquivo Local

		CDN: <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
			  integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" 
			  crossorigin="anonymous">

		Arquivo Local: Colocado ao baixar o arquivo e salvar no local do meu computador


		Qual vantagem em colocar no CDN
			- Ao colocar em diversos domínios, o browser so faz a mesma requisição 4 ou 5 vezes para o mesmo domínio. 
			Assim ele não para, pois normalmente ele fica cacheado
			Normalmente a infra estrutura de quem coloca em cdn tem uma grande escalabilidade

			Verificar os dados de transferência do seu servidor

		Quais as desvantagens
			Exigência de Infra-Estrutura
			Fora da Internet ele não ia carregar a página
			Questões de Segurança


*/