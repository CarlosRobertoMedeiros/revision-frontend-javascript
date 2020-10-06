//Criação de Array
var emails=[];

console.log(typeof(emails)); //O array é um object

emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

console.log('email[0]',emails[0]); //joao@email.com
console.log('email[5]',emails[5]); //undefined


//Criação de Arrays declarando valores
var nomes= ['João','Maria'];
console.log("Quantos nomes? ", nomes.length); //2

nomes[4]='José';
console.log("Quantos nomes existem? ", nomes.length); //5




