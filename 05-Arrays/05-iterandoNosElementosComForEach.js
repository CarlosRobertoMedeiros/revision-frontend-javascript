var nomes=['João','Pedro','Maria','José'];

 
 //Forma trandicional
 for (var i=0; i < nomes.length; i++){
 	console.log('nomes[',i,']=',nomes[i]);
 }

//Forma Mais Prática
//Usando uma função anônima
nomes.forEach(function(e){
	console.log(e);
})