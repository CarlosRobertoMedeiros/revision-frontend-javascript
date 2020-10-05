/*
	Quando a comparação for falsa 
	ele sai i<5
*/
for (var i=0; i<5;i++){
	console.log(i);
}

/*
	Fiz o teste com duas inicializações
	var k = 0, tamanho = s.length //Bloco 1
*/
var s = 'Carlos Roberto';
for (var k = 0, tamanho = s.length; k<tamanho ; k++){
	console.log('k',k)
}

/*
	Inicializei antes
	Também pode
*/
var j = 5;
for(; j<9;j++){
	console.log(j);
}

/*
	Exemplo de loop infinito
*/
var  l = 0;
for (;;){
	console.log('->',l++);
	if (l===100){
		break;
	}

}