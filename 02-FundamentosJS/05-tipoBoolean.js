var ativo = true;
console.log(typeof(ativo));

/* 
  O que dá false e o que dá true 
*/

/*0 sempre é false*/
if (0){
	console.log('0 é true')
}else{
	console.log('0 é false')
}

/*
	Como descobrir o valor boolean de uma variável

	Para Decorar os falso em boolean
	
	!!0 (false)
	!!'' false
	!!NaN false
	!! null false
	!! undefined false
	!!false
*/

console.log(!!0); //false
console.log(!!''); //false
console.log(!!NaN); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!false); //false




