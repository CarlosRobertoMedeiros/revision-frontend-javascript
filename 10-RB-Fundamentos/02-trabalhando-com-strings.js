var nome = 'Carlos Roberto';

/*
	Toda String é imutável, sempre traz uma nova String
*/
console.log(nome.charAt(2));//r
console.log(nome.charCodeAt(0));//67 Código Unicode
console.log(nome.concat("!"));//Carlos Roberto!
console.log(nome.indexOf("e"));//10
console.log(nome.replace("Carlos", "!"));//! Roberto
console.log(nome.split("a"));//[ 'C', 'rlos Roberto' ]



/* 
	Utilizando a String API

	- charAt      -> Retorna o char da posição 
	- charCodeAt  -> Retorna o código do char da posição
	- concat      -> Concatena duas Strings
	- indexOf     -> Retorna o índice da primeira ocorrência do char
	- lastIndexOf -> Retorna o índice da última ocorrência do char
	- length	  -> Retorna o tamanho da String
	- match		  -> Retorna um array resultante da busca com RegExp
	- replace	  -> Substitui parte da String por outra
	- search	  -> Retorna a posição da String ou RegExp
	- split	      -> Divide a String bom base na RegExp informada
	- substring   -> Extrai a parte da String desejada
	- toLowerCase -> Gera uma nova String com letra minuscula
	- toUpperCase -> Gera uma nova String com letra maiúscula
	- trim		  -> Remove os espaços em branco do início e do fim da String
	- valueOf	  -> Retorna o valor primitivo da String					
*/
var nome = 'Pedro';
console.log('charAt',  nome.charAt(2));//d
console.log('charCode',nome.charCodeAt(0));//80
console.log('concat',nome.concat(' Silva'));//Pedro Silva
console.log('indexOf',nome.indexOf('r'));//3
console.log('lastIndexOf',nome.lastIndexOf('o'));//4
console.log('match',nome.match('dr'));//[ 'dr', index: 2, input: 'Pedro', groups: undefined ]
console.log('replace',nome.replace('o','a'));//Pedra

var nomes= "Pedro;Ana;Maria;Carolina";
console.log(nomes.split(";"));//[ 'Pedro', 'Ana', 'Maria', 'Carolina' ]
console.log(nome.substring(0,5));//Pedro Posição Inicial até posição final -1
console.log(nome.substring(3));//ro Da posição selecionada em diante

var nome=" Pedro Silva ";
console.log(nome.trim());//Pedro Silva Remove os espaços do início e do final do código









