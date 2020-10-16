/*
Os MetaCaracteres

Quick Reference

	[abc]  		Um simples caracter como a, b ou c
	[^abc] 		Qualquer caracter simples exceto a,b ou c
	[a-z]  		Qualquer caractere simples entre a-z
	[a-zA-Z]	Qualquer caractere simples entre a-z ou A-Z
	^			Inicia uma linha
	$			Fim da Linha
	\A			Inicia uma String
	\z			Fim de uma String
	.			Qualquer caractere simples
	\s			Qualquer caractere com espaço em branco
	\S			Qualquer caractere diferente de espaço em branco
	\d			Qualquer dígito
	\D			Qualquer não dígito
	\w			Qualquer cractere de palavra(letra, número, sublinhado)
	\W			Qualquer caractere não verbal
	\b			Qualquer limite de palavra
	(...)		Captura tudo fechado
	(a|b)		a ou b
	a?			Zero ou um de um
	a*			Zero ou mais de um
	a+			Um ou mais de um
	a{3}		Exatamente 3 de
	a{3,}		3 ou mais de um
	a{3,6}		Entre 3 e 6 de a
	

MetaCaracteres	Nome
.				Ponto(Um caractere qualquer)
[]				Lista
[^]				Lista Negada
?				Opcional(Zero ou um)
*				Asterisco(Zero, um ou mais) 
+				Mais(um ou mais)
{}				Chaves
{n,m}			Chaves(de n até m)
^				Circunflexo
$				Cifrão
\b 				Borda
\ 				Escape
|				Ou
()				Grupo
\1				Retrovisor
[...]			Lista de Caracteres Permitidos
[^...]			Lista de Caracteres Negado
^				Inicio da Linha
$				Fim da linha
\b				Inicio ou fim da palavra


Links para Estudar
	MDN https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

Links para testar
	https://rubular.com/

*/