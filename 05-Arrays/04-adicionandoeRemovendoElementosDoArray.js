var emails=[];

//API de Arrays


//Adicionando informações no fim do array(Sempre no ultimo Elementos)
emails.push('joao@email.com');
emails.push('maria@email.com');
console.log(emails);

//Remove sempre o ultimo elemento
var emailExcluido = emails.pop();
console.log(emailExcluido);
console.log(emails);


//Como Inserir Itens no Início do array
emails.unshift('pedro@email.com');
console.log(emails);

//Como Remover Itens do Início do array
var emailExcluidoDoInicio = emails.shift();
console.log(emailExcluidoDoInicio);
console.log(emails);



/*
	PUSH 	/ POP
	UNSHIFT / SHIFT
*/

