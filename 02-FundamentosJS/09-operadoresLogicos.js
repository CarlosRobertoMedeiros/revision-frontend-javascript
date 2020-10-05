var ativo = true;
var administrador = false;

console.log((ativo && administrador)); //false;
console.log((ativo || administrador)); //true pois'um é valido;

console.log(ativo | administrador); //1 é true
console.log(ativo & administrador); //0 é false

/*

Nos exemplos abaixo utilizamos operações binárias
Obs: O valor binário de 10 = 1010
	 O valor binário de 1 = 1
*/
console.log(10 | 1); //11 Cálculo Binário OR de 10 | 1  = 11(Operação Or)
console.log(10 & 1); //0 Cálculo Binário AND de 10 | 1  = 0 (Operação And) para dar um só sendo 1 e 1



